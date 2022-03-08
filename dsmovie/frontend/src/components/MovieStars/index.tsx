import {ReactComponent as StarFull } from 'assert/image/star-full.svg';
import {ReactComponent as StarHalf } from 'assert/image/star-half.svg';
import {ReactComponent as StarEmpty } from 'assert/image/star-empty.svg';

function MovieStars() {
  return(
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  )
}