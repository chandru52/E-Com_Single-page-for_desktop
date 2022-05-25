const footerContent = () => {
  let foot = document.querySelector("footer");

  foot.innerHTML = `
     <div class="footer-content">
        <h3 class="logo">Trend<span>Set</span></h3>
        <div class="ul-catogeries">
          <ul class="un-list">
            <li class="head">mens</li>
            <li><a href="#" class="links">shirts</a></li>
            <li><a href="#" class="links">t-shirts</a></li>
            <li><a href="#" class="links">trousers</a></li>
            <li><a href="#" class="links">sweaters</a></li>
            <li><a href="#" class="links">shorts</a></li>
            <li><a href="#" class="links">sleeves</a></li>
            <li><a href="#" class="links">jeans</a></li>
            <li><a href="#" class="links">cotton phants</a></li>
            <li><a href="#" class="links">shoes</a></li>
            <li><a href="#" class="links">sunshade</a></li>
          </ul>
          <ul class="un-list">
            <li class="head">womens</li>
            <li><a href="#" class="links">shirts</a></li>
            <li><a href="#" class="links">t-shirts</a></li>
            <li><a href="#" class="links">trousers</a></li>
            <li><a href="#" class="links">sweaters</a></li>
            <li><a href="#" class="links">shorts</a></li>
            <li><a href="#" class="links">sleeves</a></li>
            <li><a href="#" class="links">jeans</a></li>
            <li><a href="#" class="links">cotton phants</a></li>
            <li><a href="#" class="links">shoes</a></li>
            <li><a href="#" class="links">sunshade</a></li>
          </ul>
        </div>
      </div>
      <div class="company">
        <h3>about company</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          blanditiis aperiam tempore ea ducimus laborum fuga velit, quo corrupti
          illo eaque beatae provident temporibus explicabo, dolores,
          reprehenderit quam ab dignissimos molestiae nobis voluptatem deleniti
          dolorum obcaecati. Error quisquam aut maiores quae nostrum dignissimos
          laborum, sapiente possimus obcaecati, magnam, excepturi atque!
        </p>
        <p class="mail">
          support emails-help@trendset.com, customersupport@trendset.com
        </p>
        <p class="phone">telephone-180 00 00 101, 180 00 00 102</p>
        <div class="contacts">
          <ul class="contacts-ul">
            <li>terms&services</li>
            <li>privacy policy</li>
          </ul>
          <div class="icons">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
      <p class="bot">clothing, best appearels online stores</p>
    `;
};
footerContent();
