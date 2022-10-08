import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Anime = () => {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState();
  const [searchData, setSearchData] = useState("saki");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleClick = () => {
    setSearchData(searchString);
  };

  const handleNext = () => {
    setPage(page + 1);
    fetchData();
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
    fetchData();
  };

  const fetchData = () => {
    axios
      .get(
        `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${searchData}&order_by=favorite&sort=desc`
      )
      .then((res) => {
        console.log(res?.data?.data?.length);
        if (res?.data?.data?.length === 0) {
          //   alert("No results found!");
        } else {
          setData(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div style={{ backgroundColor: " #ffffe6", padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        <span
          style={{
            border: "1px solid #000",
            borderRadius: "30px",
            padding: "8px",
            background: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="Enter Here...."
            value={searchString}
            onChange={handleChange}
            style={{
              width: "400px",
              height: 30,
              border: "none",
              fontSize: "20px",
            }}
          />

          <SearchIcon onClick={handleClick} />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Array.isArray(data) &&
          data?.map(({ name, images }) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: 300,
                    padding: 10,
                    margin: 10,
                    border: "1px solid #000",
                    boxShadow: "5px 5px 8px #888888",
                  }}
                >
                  <img
                    src={images.jpg.image_url}
                    alt="wait"
                    style={{ width: "100%", height: 150 }}
                  />
                  <h4 style={{ margin: "auto" }}>{name}</h4>
                </div>
              </>
            );
          })}
      </div>
      <div
        style={{
          display: "flex",

          marginTop: 50,
          marginLeft: 650,
          marginBottom: 100,
        }}
      >
        <button
          onClick={handlePrevious}
          style={{
            height: 40,
            width: 100,
            background: "Highlight",
            border: "none",
            color: "#fff",
            padding: "10px",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            height: 40,
            width: 100,
            background: "Highlight",
            border: "none",
            color: "#fff",
            padding: "10px",
            marginLeft: 10,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Anime;
