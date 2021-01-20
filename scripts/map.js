let map;

            function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 51.11100475687568, lng: 71.41790963971107},
                zoom: 13,
            });

            var icon = {
                url: "img/icons/map.png",
                scaledSize: new google.maps.Size(40, 40)
            };

            var khanshatyr = new google.maps.Marker({
                position: {lat: 51.13259439415083, lng: 71.40374757713016},
                map: map,
                icon: icon,
                title: "Sulpak KhanShatyr"
            });

            var keruen = new google.maps.Marker({
                position: {lat: 51.127814025367094, lng: 71.42522672536545},
                map: map,
                icon: icon,
                title: "Technodom Keruen"
            });

            var mega = new google.maps.Marker({
                position: {lat: 51.08893330366179, lng: 71.40696624797273},
                map: map,
                icon: icon,
                title: "Technodom Mega"
            });

            var magnum = new google.maps.Marker({
                position: {lat: 51.1150871492264, lng: 71.39840229854299},
                map: map,
                icon: icon,
                title: "Technodom Magnum"
            });

            const contentKS =
                                    '<div id="content">' +
                                    '<div id="siteNotice">' +
                                    "</div>" +
                                    '<h2 id="firstHeading" class="firstHeading">Sulpak KhanShatyr</h2>' +
                                    '<div id="bodyContent">' +
                                    "<p>Appliance store</p>" +
                                    "<p>Khan Shatyr Mall,</p>" +
                                    "<p>Turan ave., 37</p>" +
                                    "<p>Open until 22:00</p>" +
                                    '<p><a class="psbuttonlink" href="https://www.sulpak.kz/f/igroviye_pristavki" target="_blank">' +
                                    "Visit site</a></p>" +
                                    "</div>" +
                                    "</div>";

            const infoKS = new google.maps.InfoWindow({
                content: contentKS,
            });                            
            
            khanshatyr.addListener("click", () => {
                infoKS.open(map, khanshatyr);
                map.setZoom(15);
                map.setCenter(khanshatyr.getPosition());
            });

            google.maps.event.addListener(infoKS,'closeclick',function(){
                map.setZoom(13);
                map.setCenter({ lat: 51.11100475687568, lng: 71.41790963971107});
            });

            const ksOutline = new google.maps.Circle({
                strokeColor: "#ffcc34",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#ffcc34",
                fillOpacity: 0.35,
                map,
                center: khanshatyr.getPosition(),
                radius: 150,
            });

            const contentKer =
                                    '<div id="content">' +
                                    '<div id="siteNotice">' +
                                    "</div>" +
                                    '<h2 id="firstHeading" class="firstHeading">Technodom Keruen</h2>' +
                                    '<div id="bodyContent">' +
                                    "<p>Appliance store</p>" +
                                    "<p>Keruen Mall,</p>" +
                                    "<p>Dostyk st., 9</p>" +
                                    "<p>Open until 22:00</p>" +
                                    '<p><a class="psbuttonlink" href="https://www.technodom.kz/astana/vsjo-dlja-gejmerov/igrovye-pristavki/vse-igrovye-pristavki" target="_blank">' +
                                    "Visit site</a></p>" +
                                    "</div>" +
                                    "</div>";

            const infoKer = new google.maps.InfoWindow({
                content: contentKer,
            });                            
            
            keruen.addListener("click", () => {
                infoKer.open(map, keruen);
                map.setZoom(15);
                map.setCenter(keruen.getPosition());
            });

            google.maps.event.addListener(infoKer,'closeclick',function(){
                map.setZoom(13);
                map.setCenter({ lat: 51.11100475687568, lng: 71.41790963971107});
            });

            const kerCoord = [
                { lat: 51.12711811966715, lng: 71.42573140807968 },
                { lat: 51.12835367468616, lng: 71.42630003634466 },
                { lat: 51.12861963452578, lng: 71.42481141046382 },
                { lat: 51.127387453282225, lng: 71.42424546440763 },
                { lat: 51.12711811966715, lng: 71.42573140807968 },
            ];

            const kerOutline = new google.maps.Polygon({
                paths: kerCoord,
                strokeColor: "#ffcc34",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                map,
                fillColor: "#ffcc34",
                fillOpacity: 0.35,
            });

            const contentMega =
                                    '<div id="content">' +
                                    '<div id="siteNotice">' +
                                    "</div>" +
                                    '<h2 id="firstHeading" class="firstHeading">Technodom Mega</h2>' +
                                    '<div id="bodyContent">' +
                                    "<p>Appliance store</p>" +
                                    "<p>Mega SilkWay Mall,</p>" +
                                    "<p>Kabanbay Batyr ave., 62</p>" +
                                    "<p>Open until 22:00</p>" +
                                    '<p><a class="psbuttonlink" href="https://www.technodom.kz/astana/vsjo-dlja-gejmerov/igrovye-pristavki/vse-igrovye-pristavki" target="_blank">' +
                                    "Visit site</a></p>" +
                                    "</div>" +
                                    "</div>";

            const infoMega = new google.maps.InfoWindow({
                content: contentMega,
            });                            
            
            mega.addListener("click", () => {
                infoMega.open(map, mega);
                map.setZoom(15);
                map.setCenter(mega.getPosition());
            });

            google.maps.event.addListener(infoMega,'closeclick',function(){
                map.setZoom(13);
                map.setCenter({ lat: 51.11100475687568, lng: 71.41790963971107});
            });

            const megaCoord = [
                { lat: 51.09036966490759, lng: 71.40414767162665 },
                { lat: 51.0894531904663, lng: 71.4111750586749 },
                { lat: 51.08795714169785, lng: 71.41101412614708 },
                { lat: 51.088893862581855, lng: 71.40358977219687 },
                { lat: 51.09036966490759, lng: 71.40414767162665 },
            ];

            const megaOutline = new google.maps.Polygon({
                paths: megaCoord,
                strokeColor: "#ffcc34",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                map,
                fillColor: "#ffcc34",
                fillOpacity: 0.35,
            });

            const contentMagnum =
                                    '<div id="content">' +
                                    '<div id="siteNotice">' +
                                    "</div>" +
                                    '<h2 id="firstHeading" class="firstHeading">Technodom Magnum</h2>' +
                                    '<div id="bodyContent">' +
                                    "<p>Appliance store</p>" +
                                    "<p>Magnum Mall,</p>" +
                                    "<p>Turan ave., 5d</p>" +
                                    "<p>Open until 20:00</p>" +
                                    '<p><a class="psbuttonlink" href="https://www.technodom.kz/astana/vsjo-dlja-gejmerov/igrovye-pristavki/vse-igrovye-pristavki" target="_blank">' +
                                    "Visit site</a></p>" +
                                    "</div>" +
                                    "</div>";

            const infoMagnum = new google.maps.InfoWindow({
                content: contentMagnum,
            });                            
            
            magnum.addListener("click", () => {
                infoMagnum.open(map, magnum);
                map.setZoom(15);
                map.setCenter(magnum.getPosition());
            });

            google.maps.event.addListener(infoMagnum,'closeclick',function(){
                map.setZoom(13);
                map.setCenter({ lat: 51.11100475687568, lng: 71.41790963971107});
            });

            const manumCoord = [
                { lat: 51.11635695698226, lng: 71.3964497311527 },
                { lat: 51.11410073869713, lng: 71.39547337568659 },
                { lat: 51.113588797174955, lng: 71.39905682960975 },
                { lat: 51.11581140331293, lng: 71.39997950943592 },
                { lat: 51.11635695698226, lng: 71.3964497311527 },
            ];
            
            const magnumOutline = new google.maps.Polygon({
                paths: manumCoord,
                strokeColor: "#ffcc34",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                map,
                fillColor: "#ffcc34",
                fillOpacity: 0.35,
            });

            var screenWidth = window.screen.width;
            if (screenWidth < 1280 && screenWidth > 768) {
                map.setZoom(12);
            }
            if (screenWidth < 769) {
                map.setZoom(11);
            }

            }