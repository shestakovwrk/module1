import { useEffect, useState } from "react";
import { useAuth, upload } from "./firebase";
import './App.css';

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  return (
    <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Загрузить</button>
      
      <img src={photoURL} alt="Avatar" className="avatar" />

      <div class="container">
        <div class="css-slider-wrapper">
          <input type="radio" class="slide-radio1" name="slider" id="slider_1" checked="checked"/>
          <input type="radio" class="slide-radio2" name="slider" id="slider_2"/>
          <input type="radio" class="slide-radio3" name="slider" id="slider_3"/>
          <input type="radio" class="slide-radio4" name="slider" id="slider_4"/>

          <div class="slider-pegination">
            <label for="slider_1" class="page1"></label>
            <label for="slider_2" class="page2"></label>
            <label for="slider_3" class="page3"></label>
            <label for="slider_4" class="page4"></label>
          </div>

      <div class="next control">
        <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-right"></i></label>
        <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-right"></i></label>
        <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-right"></i></label>
        <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-right"></i></label>
      </div>

      <div class="previous control">
        <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-left"></i></label>
        <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-left"></i></label>
        <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-left"></i></label>
        <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-left"></i></label>
      </div>

      <div class="slider slide1">
        <div>
          <h2>Css Based slider</h2>
        </div>
      </div>

      <div class="slider slide2">
        <div>
          <h2>CSS Slider without use of any javascript or jQuery</h2>
        </div>
      </div>

      <div class="slider slide3">
        <div>
          <h2>Full screen animation slider</h2>
        </div>
      </div>

      <div class="slider slide4">
        <div>
          <h2>css3 slider</h2>
        </div>
      </div>
  </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    </div>
  );
}