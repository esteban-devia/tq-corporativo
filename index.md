<!DOCTYPE html>
<html lang="es-co">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index">
    <meta name="description" content="">
    <meta property="og:type" content="" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />
    <meta property="og:site_name" content="" />
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <meta name="twitter:site" content="">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/footer.css">
    <title>Tecnoquímicas - Inicio</title>
    <link rel="canonical" href="">
</head>

<body>
    <header>
        <a href="index.html">
            <picture>
                <source media="(max-width: 768px)" srcset="imgs/header/logoTQ-mob.png">
                <img src="imgs/header/logoTQ.png" alt="LogoTQ" id="LogoTQ">
            </picture>
        </a>
        <div class="grayBar">
            <div class="socialLinks">
                <p>Síguenos</p>
                <div class="socialIcons">
                    <a href="https://www.linkedin.com/company/tqconfiable" target="_blank"><img src="imgs/header/linkedin-grey.png" alt="Linkedin"></a>
                    <a href="https://www.facebook.com/TQConfiable/" target="_blank"><img src="imgs/header/facebook-grey.png" alt="Facebook"></a>
                    <a href="https://www.instagram.com/tqconfiable/?hl=es-la" target="_blank"><img src="imgs/header/linkedin-grey.png" alt="Instagram"></a>
                    <a href="https://twitter.com/tqconfiable" target="_blank"><img src="imgs/header/twitter-grey.png" alt="Twitter"></a>
                </div>
            </div>
            <div class="corp">
                <a href="">Colaborador TQ</a>
                <a href="">TQ Farma</a>
                <a href="">Encuéntranos</a>
                <a href="">Gobierno Corporativo</a>
            </div>
        </div>
        <nav>
            <div class="menu">
                <div class="menuItem active">
                    <a href="index.html">Inicio</a>
                </div>
                <div class="menuItem">
                    <a href="#">Así Cambiamos El Mundo<img src="imgs/header/down-arrow.png" alt="menuDownArrow"></a>
                    <div class="menuInner second">
                        <a href="quienes-somos/quien-es-tq.html">¿Quiénes somos?</a>
                        <a href="nuestro-planeta/cuidado-del-agua.html">Por un mundo mejor</a>
                        <a href="investigacion-e-innovacion.html">Investigación e innovación</a>
                    </div>
                </div>
                <div class="menuItem">
                    <a href="#">Trabaja en TQ<img src="imgs/header/down-arrow.png" alt="menuDownArrow"></a>
                    <div class="menuInner">
                        <a href="ofertas-de-trabajo.html">Ofertas de trabajo</a>
                        <a href="testimonio.html">Testimonio</a>
                        <a href="beneficios/aporte-al-empleo.html">Beneficios TQ</a>
                    </div>
                </div>
                <div class="menuItem">
                    <a href="noticias.html">Noticias</a>
                </div>
                <div class="menuItem">
                    <a href="productos.html">Nuestros Productos</a>
                </div>
                <div class="menuItem">
                    <a href="">Contacto<img src="imgs/header/down-arrow.png" alt="menuDownArrow"></a>
                    <div class="menuInner">
                        <a href="contacto/encuentranos.html">Encuéntranos</a>
                        <a href="contacto/servicio-al-cliente.html">Servicio al cliente</a>
                        <a href="contacto/preguntas-frecuentes.html">Preguntas frecuentes</a>
                        <a href="contacto/linea-etica.html">Línea ética</a>
                    </div>
                </div>
            </div>
            <div class="ham" onclick="openMenu()">
                <img src="imgs/header/ham.png" alt="hamburgerMenu">
            </div>
            <!-- MENU MOBILE -->
            <div class="menuMobile">
                <div class="navMobile">
                    <div class="mainMenu">
                        <span onclick="openMenuList(0)">Inicio <img src="imgs/header/down-arrow-mob.png" alt="" class="mobMenuArrow"></span>
                        <div class="menuList">
                            <span><a href="noticias.html">Noticias</a></span>
                        </div>
                    </div>
                    <div class="mainMenu">
                        <span onclick="openMenuList(1)">Así cambiamos el mundo <img src="imgs/header/down-arrow-mob.png" alt="" class="mobMenuArrow"></span>
                        <div class="menuList">
                            <span id="whoAreWe"><a href="quienes-somos/quien-es-tq.html">¿Quiénes somos?</a></span>
                            <div>
                                <a href="quienes-somos/mision.html">Misión</a>
                                <a href="quienes-somos/vision.html">Visión</a>
                                <a href="quienes-somos/credo.html">Credo TQ</a>
                                <a href="quienes-somos/historia.html">Historia</a>
                            </div>
                            <span id="whoAreWe">Por un mundo mejor </span>
                            <div>
                                <a href="nuestro-planeta/cuidado-del-agua.html">Nuestro planeta</a>
                                <a href="nuestra-gente/aporte-al-empleo.html">Nuestra gente</a>
                            </div>
                            <span><a href="investigacion-e-innovacion.html">Innovación e investigación</a></span>
                        </div>
                    </div>
                    <div class="mainMenu">
                        <span onclick="openMenuList(2)">Trabaja en TQ <img src="imgs/header/down-arrow-mob.png" alt="" class="mobMenuArrow"></span>
                        <div class="menuList">
                            <span><a href="ofertas-de-trabajo.html">Ofertas de trabajo</a></span>
                            <span><a href="beneficios/aporte-al-empleo.html">Beneficios TQ</a></span>
                            <span><a href="testimonio.html">Testimonio</a></span>
                        </div>
                    </div>
                    <div class="mainMenu">
                        <a href="productos.html"><span>Nuestros productos</span></a>
                    </div>
                    <div class="mainMenu">
                        <span onclick="openMenuList(3)">Contacto<img src="imgs/header/down-arrow-mob.png" alt="" class="mobMenuArrow"></span>
                        <div class="menuList">
                            <span><a href="contacto/encuentranos.html">Encuéntranos</a></span>
                            <span><a href="contacto/servicio-al-cliente.html">Servicio al cliente</a></span>
                            <span><a href="contacto/preguntas-frecuentes.html">Preguntas frecuentes</a></span>
                            <span><a href="contacto/linea-etica.html">Línea ética</a></span>
                        </div>
                    </div>
                </div>
                <div class="corpMobile ">
                    <a href=" ">Colaborador TQ</a>
                    <a href=" ">TQ Farma</a>
                    <a href=" ">Gobierno Corporativo</a>
                </div>
            </div>
        </nav>
    </header>
    <section>
        <div class="mainbanner">
            <picture>
                <source media="(max-width: 768px)" srcset="imgs/home/homeBanner1-mob.jpg">
                <img src="imgs/home/homeBanner1.jpg" alt="">
            </picture>
            <div class="overBanner">
                <div class="textBanner">
                    <h1>La medicación a partir de análisis genéticos es una realidad</h1>
                    <div>
                        <p>Innovación</p>
                        <div></div>
                        <span>
                            <p>Noticia</p>
                            <p>Estudios</p>
                            <p>últimos avances</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="showE">
            <div class="homeProd">
                <div class="prodHomegrid">
                    <div class="singleProd">
                        <a href="">
                            <div>
                                <img src="imgs/home/noraver.jpg" alt="">
                            </div>
                            <div class="prodHometext">
                                <h3>Conoce el potente<br>alivio de Noraver</h3>
                                <div>
                                    <p>Conoce más aquí</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="singleProd">
                        <a href="">
                            <div>
                                <img src="imgs/home/sdf.jpg" alt="">
                            </div>
                            <div class="prodHometext">
                                <h3>Ten siempre a la mano<br>el alivio de Lua</h3>
                                <div>
                                    <p>Conoce más aquí</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="singleProd">
                        <a href="">
                            <div>
                                <img src="imgs/home/winny.jpg" alt="">
                            </div>
                            <div class="prodHometext">
                                <h3>Conoce el potente<br>alivio de Noraver</h3>
                                <div>
                                    <p>Conoce más aquí</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    </section>
    <section>
        <div class="homeNewsmain showE">
            <h2>Noticias</h2>
            <div class="homeNews">
                <div class="homeNewsgrid">
                    <div class="singlehomeNews">
                        <a href="">
                            <div class="imgprevNews">
                                <img src="imgs/home/noticia1.jpg" alt="">
                                <span class="date">17/12/2019</span>
                                <h3>¿Por qué el 4 de febrero es el día mundial contra el cáncer?</h3>
                            </div>
                            <div class="homeNewstext">
                                <hr>
                                <p>Innovación Para TQ, es muy importante conmemorar cada 4 de febrero el Día Mundial contra el Cáncer, un evento que tiene como objetivo aumentar la conciencia…</p>
                            </div>
                        </a>
                    </div>
                    <div class="singlehomeNews">
                        <a href="">
                            <div class="imgprevNews">
                                <img src="imgs/home/noticia2.jpg" alt="">
                                <span class="date">20/09/2019</span>
                                <h3>Nuevo tomo de “la historia de la medicina en Colombia”</h3>
                            </div>
                            <div class="homeNewstext">
                                <hr>
                                <p>Actualidad En nuestro constante compromiso con la educación, la salud y la investigación, realizamos el estudio de la Historia de la Medicina en Colombia, la cual hemos…</p>
                            </div>
                        </a>
                    </div>
                    <div class="singlehomeNews">
                        <a href="">
                            <div class="imgprevNews">
                                <img src="imgs/home/noticia3.jpg" alt="">
                                <span class="date">07/09/2019</span>
                                <h3>Winny entre las 100 Marcas más valiosas</h3>
                            </div>
                            <div class="homeNewstext">
                                <hr>
                                <p>Actualidad Lore m ipsum dolo sit amet, consectetur ristique. Fermeit aentum bibendum risus, sed aliquam diam laoreet et. In ta bibendum magna quam, quis…</p>
                            </div>
                        </a>
                    </div>
                    <div class="singlehomeNews">
                        <a href="">
                            <div class="imgprevNews">
                                <img src="imgs/home/noticia4.jpg" alt="">
                                <span class="date">03/09/2019</span>
                                <h3>Villa Rica: Tierra de promesa</h3>
                            </div>
                            <div class="homeNewstext">
                                <hr>
                                <p>Actualidad Lore m ipsum dolo sit amet, consectetur ristique. Fermeit aentum bibendum risus, sed aliquam diam laoreet et. In ta bibendum magna quam, quis…</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="homeNewsgridmob">
                    <div class="homeNewsmob">
                        <a class="prev" onclick="plusSlide(-1)">
                            <img src="imgs/home/left-arrow.png" alt="">
                        </a>
                        <div class="singlehomeNewsmob">
                            <a href="">
                                <div class="imgprevNews">
                                    <img src="imgs/home/noticia1.jpg" alt="">
                                    <span class="date">17/12/2019</span>
                                    <h3>¿Por qué el 4 de febrero es el día mundial contra el cancer?</h3>
                                </div>
                                <div class="homeNewstext">
                                    <hr>
                                    <p>Innovación Para TQ, es muy importante conmermorar cada 4 de febrero el Día Mundial contra el Cáncer, un evento que tiene como objetivo aumentar la conciencia…</p>
                                </div>
                            </a>
                        </div>
                        <div class="singlehomeNewsmob">
                            <a href="">
                                <div class="imgprevNews">
                                    <img src="imgs/home/noticia2.jpg" alt="">
                                    <span class="date">20/09/2019</span>
                                    <h3>Nuevo tomo de “la historia de la medicina en Colombia”</h3>
                                </div>
                                <div class="homeNewstext">
                                    <hr>
                                    <p>Actualidad En nuestro constante compromiso con la educación, la salud y la investigación, realizamos el estudio de la Historia de la Medicina en Colombia, la cual hemos…</p>
                                </div>
                            </a>
                        </div>
                        <div class="singlehomeNewsmob">
                            <a href="">
                                <div class="imgprevNews">
                                    <img src="imgs/home/noticia3.jpg" alt="">
                                    <span class="date">07/09/2019</span>
                                    <h3>Winny entre las 100 Marcas más valiosas</h3>
                                </div>
                                <div class="homeNewstext">
                                    <hr>
                                    <p>Actualidad Lore m ipsum dolo sit amet, consectetur ristique. Fermeit aentum bibendum risus, sed aliquam diam laoreet et. In ta bibendum magna quam, quis…</p>
                                </div>
                            </a>
                        </div>
                        <div class="singlehomeNewsmob">
                            <a href="">
                                <div class="imgprevNews">
                                    <img src="imgs/home/noticia4.jpg" alt="">
                                    <span class="date">03/09/2019</span>
                                    <h3>Villa Rica: Tierra de promesa</h3>
                                </div>
                                <div class="homeNewstext">
                                    <hr>
                                    <p>Actualidad Lore m ipsum dolo sit amet, consectetur ristique. Fermeit aentum bibendum risus, sed aliquam diam laoreet et. In ta bibendum magna quam, quis…</p>
                                </div>
                            </a>
                        </div>
                        <a class="next" onclick="plusSlide(1)">
                            <img src="imgs/home/right-arrow.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="footermain">
            <div class="footerMenu">
                <div class="footerMenuinner">
                    <div class="footerTitle" onclick="openFooterList(0)">
                        <span><a href="index.html">Inicio</a></span><img src="imgs/header/down-arrow.png" alt="" class="footerArrow">
                    </div>
                    <div class="footerList">
                        <span class="footerMenutitle"><a href="noticias.html">Noticias</a></span>
                    </div>
                </div>
                <div class="footerMenuinner">
                    <div class="footerTitle" onclick="openFooterList(1)">
                        <span>Así cambiamos el mundo</span><img src="imgs/header/down-arrow.png" alt="" class="footerArrow">
                    </div>
                    <div class="footerList">
                        <span class="footerMenutitle"><a href="quienes-somos/quien-es-tq.html">¿Quiénes somos?</a></span>
                        <ul>
                            <li><a href="quienes-somos/mision.html">Misión</a></li>
                            <li><a href="quienes-somos/vision.html">Visión</a></li>
                            <li><a href="quienes-somos/credo.html">Credo TQ</a></li>
                            <li><a href="quienes-somos/historia.html">Historia</a></li>
                        </ul>
                        <span class="footerMenutitle">Por un mundo mejor</span>
                        <ul>
                            <li><a href="nuestro-planeta/cuidado-del-agua.html">Nuestro planeta</a></li>
                            <li><a href="nuestra-gente/aporte-al-empleo.html">Nuestra gente</a></li>
                        </ul>
                        <span class="footerMenutitle"><a href="investigacion-e-innovacion.html">Investigación e innovación</a></span>
                    </div>
                </div>
                <div class="footerMenuinner">
                    <div class="footerTitle" onclick="openFooterList(2)">
                        <span>Trabaja en TQ</span><img src="imgs/header/down-arrow.png" alt="" class="footerArrow">
                    </div>
                    <div class="footerList">
                        <span class="footerMenutitle"><a href="ofertas-de-trabajo.html">Ofertas de trabajo</a></span>
                        <span class="footerMenutitle"><a href="beneficios/aporte-al-empleo.html">Beneficios TQ</a></span>
                        <span class="footerMenutitle"><a href="testimonio.html">Testimonio</a></span>
                    </div>
                </div>
                <div class="footerMenuinner">
                    <div class="footerTitle">
                        <span><a href="productos.html">Nuestros productos</a></span>
                    </div>
                </div>
                <div class="footerMenuinner">
                    <div class="footerTitle" onclick="openFooterList(3)">
                        <span>Contacto</span><img src="imgs/header/down-arrow.png" alt="" class="footerArrow">
                    </div>
                    <div class="footerList">
                        <span class="footerMenutitle"><a href="contacto/servicio-al-cliente.html">Servicio al cliente</a></span>
                        <span class="footerMenutitle"><a href="contacto/preguntas-frecuentes.html">Preguntas frecuentes</a></span>
                        <span class="footerMenutitle"><a href="contacto/linea-etica.html">Línea ética</a></span>
                        <span class="footerMenutitle"><a href="contacto/encuentranos.html">Encuéntranos</a></span>
                    </div>
                    <div class="footersocial">
                        <p>Síguenos</p>
                        <div class="footerIcons">
                            <a href="https://www.linkedin.com/company/tqconfiable" target="_blank"><img src="imgs/header/linkedin-blue.png" alt="Linkedin"></a>
                            <a href="https://www.facebook.com/TQConfiable/" target="_blank"><img src="imgs/header/facebook-blue.png" alt="Facebook"></a>
                            <a href="https://www.instagram.com/tqconfiable/?hl=es-la" target="_blank"><img src="imgs/header/instagram-blue.png" alt="Instagram"></a>
                            <a href="https://twitter.com/tqconfiable" target="_blank"><img src="imgs/header/twitter-blue.png" alt="Twitter"></a>
                            <a href="" target="_blank"><img src="imgs/header/youtube-blue.png" alt="Youtube"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="legalRights">
            <div class="footersocialmob">
                <p>Síguenos</p>
                <div class="footerIconsmob">
                    <a href="https://www.linkedin.com/company/tqconfiable" target="_blank"><img src="imgs/header/linkedin-blue.png" alt="Linkedin"></a>
                    <a href="https://www.facebook.com/TQConfiable/" target="_blank"><img src="imgs/header/facebook-blue.png" alt="Facebook"></a>
                    <a href="https://www.instagram.com/tqconfiable/?hl=es-la" target="_blank"><img src="imgs/header/instagram-blue.png" alt="Instagram"></a>
                    <a href="https://twitter.com/tqconfiable" target="_blank"><img src="imgs/header/twitter-blue.png" alt="Twitter"></a>
                    <a href="https://www.youtube.com/channel/UCDoeAqs4yBpNziXkhB3EJtA" target="_blank"><img src="imgs/header/youtube-blue.png" alt="Youtube"></a>
                </div>
            </div>
            <p>© 2020. Tecnoquímicas</p>
            <p>Todos los derechos reservados</p>
            <p><a href="">Términos y condiciones</a></p>
            <p><a href="">Políticas de privacidad</a></p>
        </div>
    </footer>

    <script src="js/header.js"></script>
    <script src="js/home.js"></script>
</body>

</html>
