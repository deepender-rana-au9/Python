import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
export default function Home() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:2000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("http://localhost:2000/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unLikePost = (id) => {
    fetch("http://localhost:2000/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      {data.map((item) => {
        return (
          <div className="card" key={item._id}>
            <h5 className="center">{item.postedBy.name}</h5>
            <div className="card-image">
              <img
                src={item.photo}
                alt="loading"
                style={{ height: "90vh", width: "90%", margin: "auto" }}
              />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  onClick={() => unLikePost(item._id)}
                >
                  thumb_down
                </i>
              ) : (
                <i
                  className="material-icons"
                  onClick={() => likePost(item._id)}
                >
                  thumb_up
                </i>
              )}

              <p>{item.likes.length} likes</p>
              <h5>{item.title}</h5>
              <h6>{item.subTitle}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="Comment here" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
