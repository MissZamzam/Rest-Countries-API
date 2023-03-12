import React from 'react'

const Popup = () => {
  return (
    <div>
      <div class="container">
  <a class="button" href="#popup">Open Modal</a>
  <div class="popup" id="popup">
    <div class="popup-inner">
      <div class="popup__photo">
        <img src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=700&q=80" alt="" />
      </div>
      <div class="popup__text">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex velit, viverra non vulputate vitae, blandit vitae nisl. Nullam fermentum orci et erat viverra bibendum. Aliquam sed varius nibh, vitae mattis purus. Mauris elementum sapien non ullamcorper vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget felis sit amet eros viverra pulvinar.</p>
      </div>
      <a class="popup__close" href="#">X</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Popup
