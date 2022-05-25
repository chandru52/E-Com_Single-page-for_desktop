const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <div class="logo">
        <h3>Trend<span>Set</span></h3>
    </div>
    <div class="inputs">
        <input type="search" placeholder="search brand, cloths" class="search">
        <button>search</button>
        <a href="#"><i class="fas fa-user-circle"></i></a>
        <a href="#"> <i class="fas fa-shopping-cart"></i></a>
    </div>
    </div>
    <hr>
    <ul>
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accesories</a></li>
    </ul>
    `;
}
createNav();