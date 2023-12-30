const First_Components = () => {
  return (
    <div className="fir-com">
      <div className="fir">
        <h1>Fully Responsive Design</h1>
        <p>
          When you use a theme created by Start Bootstrap, you know that the
          theme will look
          <br /> great on any device,whether it's a phone, tablet, or desktop
          the page will behave
          <br />
          responsively!
        </p>
      </div>
      <div className="image">
        <img src="../images/img/bg-showcase-1.jpg" alt="" />
      </div>
    </div>
  );
};

const Second_Component = () => {
  return (
    <div className="second-com">
      <div>
        <img src="../images/img/bg-showcase-2.jpg" alt="" />
      </div>
      <div className="second">
        <h1>Updated for Bootstrap 5</h1>
        <p>
          Newly improved, and full of great utility classes, Bootstrap 5 is
          leading the way in
          <br />
          mobile responsive web development! All of the themes on Start
          Bootstrap are now
          <br />
          using Bootstrap 5!
        </p>
      </div>
    </div>
  );
};

const Third_Component = () => {
  return (
    <div className="third-com">
      <div className="third">
        <h1>Updated for Bootstrap 5</h1>
        <p>
          Newly improved, and full of great utility classes, Bootstrap 5 is
          leading the way in
          <br />
          mobile responsive web development! All of the themes on Start
          Bootstrap are now
          <br />
          using Bootstrap 5!
        </p>
      </div>
      <div>
        <img src="../images/img/bg-showcase-3.jpg" alt="" />
      </div>
    </div>
  );
};

const Four_Component = () => {
  return (
    <div className="four">
      <div>
        <h1>What people are saying...</h1>
      </div>
    </div>
  );
};
const Five_Components = () => {
    return(
        <div className="five">
            <div>
            <img src="../images/img/testimonials-1.png" alt="" />
            <h2>Margaret E.</h2>
            <p>"This is fantastic! Thanks so much guys!"</p>
        </div>
        <div>
            <img src="../images/img/testimonials-2.png" alt="" />
            <h2>Fred S.</h2>
            <p>"Bootstrap is amazing. I've been using it<br />
             to create a lot of super nice landing<br />pages."</p>
        </div>
        <div>
            <img src="../images/img/testimonials-3.png" alt="" />
            <h2>Sarah W.</h2>
            <p>"Thanks so much for making these free<br />
            resources available to us!"</p>
        </div>
</div>
    )
}

export { First_Components, Second_Component, Third_Component, Four_Component, Five_Components };
