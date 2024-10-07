var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Anexo26readeDespejodeDejetosdeDragagem_1 = new ol.format.GeoJSON();
var features_Anexo26readeDespejodeDejetosdeDragagem_1 = format_Anexo26readeDespejodeDejetosdeDragagem_1.readFeatures(json_Anexo26readeDespejodeDejetosdeDragagem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo26readeDespejodeDejetosdeDragagem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo26readeDespejodeDejetosdeDragagem_1.addFeatures(features_Anexo26readeDespejodeDejetosdeDragagem_1);
var lyr_Anexo26readeDespejodeDejetosdeDragagem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo26readeDespejodeDejetosdeDragagem_1, 
                style: style_Anexo26readeDespejodeDejetosdeDragagem_1,
                popuplayertitle: "Anexo 26 - Área de Despejo de Dejetos de Dragagem",
                interactive: true,
                title: '<img src="styles/legend/Anexo26readeDespejodeDejetosdeDragagem_1.png" /> Anexo 26 - Área de Despejo de Dejetos de Dragagem'
            });
var format_Anexo25readeEsperadosPrticos_2 = new ol.format.GeoJSON();
var features_Anexo25readeEsperadosPrticos_2 = format_Anexo25readeEsperadosPrticos_2.readFeatures(json_Anexo25readeEsperadosPrticos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo25readeEsperadosPrticos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo25readeEsperadosPrticos_2.addFeatures(features_Anexo25readeEsperadosPrticos_2);
var lyr_Anexo25readeEsperadosPrticos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo25readeEsperadosPrticos_2, 
                style: style_Anexo25readeEsperadosPrticos_2,
                popuplayertitle: "Anexo 25 - Área de Espera dos Práticos",
                interactive: true,
                title: '<img src="styles/legend/Anexo25readeEsperadosPrticos_2.png" /> Anexo 25 - Área de Espera dos Práticos'
            });
var format_Anexos22a24reasdeFundeion14e6_3 = new ol.format.GeoJSON();
var features_Anexos22a24reasdeFundeion14e6_3 = format_Anexos22a24reasdeFundeion14e6_3.readFeatures(json_Anexos22a24reasdeFundeion14e6_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos22a24reasdeFundeion14e6_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos22a24reasdeFundeion14e6_3.addFeatures(features_Anexos22a24reasdeFundeion14e6_3);
var lyr_Anexos22a24reasdeFundeion14e6_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos22a24reasdeFundeion14e6_3, 
                style: style_Anexos22a24reasdeFundeion14e6_3,
                popuplayertitle: "Anexos 22 a 24 - Áreas de Fundeio (n° 1, 4 e 6)",
                interactive: true,
                title: '<img src="styles/legend/Anexos22a24reasdeFundeion14e6_3.png" /> Anexos 22 a 24 - Áreas de Fundeio (n° 1, 4 e 6)'
            });
var format_Anexo21BaciadeEvoluodoSuperportodeVitria_4 = new ol.format.GeoJSON();
var features_Anexo21BaciadeEvoluodoSuperportodeVitria_4 = format_Anexo21BaciadeEvoluodoSuperportodeVitria_4.readFeatures(json_Anexo21BaciadeEvoluodoSuperportodeVitria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo21BaciadeEvoluodoSuperportodeVitria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo21BaciadeEvoluodoSuperportodeVitria_4.addFeatures(features_Anexo21BaciadeEvoluodoSuperportodeVitria_4);
var lyr_Anexo21BaciadeEvoluodoSuperportodeVitria_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo21BaciadeEvoluodoSuperportodeVitria_4, 
                style: style_Anexo21BaciadeEvoluodoSuperportodeVitria_4,
                popuplayertitle: "Anexo 21 - Bacia de Evolução do Superporto de Vitória",
                interactive: true,
                title: '<img src="styles/legend/Anexo21BaciadeEvoluodoSuperportodeVitria_4.png" /> Anexo 21 - Bacia de Evolução do Superporto de Vitória'
            });
var format_Anexo20readoSuperportodeVitria_5 = new ol.format.GeoJSON();
var features_Anexo20readoSuperportodeVitria_5 = format_Anexo20readoSuperportodeVitria_5.readFeatures(json_Anexo20readoSuperportodeVitria_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo20readoSuperportodeVitria_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo20readoSuperportodeVitria_5.addFeatures(features_Anexo20readoSuperportodeVitria_5);
var lyr_Anexo20readoSuperportodeVitria_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo20readoSuperportodeVitria_5, 
                style: style_Anexo20readoSuperportodeVitria_5,
                popuplayertitle: "Anexo 20 - Área do Superporto de Vitória",
                interactive: true,
                title: '<img src="styles/legend/Anexo20readoSuperportodeVitria_5.png" /> Anexo 20 - Área do Superporto de Vitória'
            });
var format_Anexos18e19ParteAquticadePraiaMolen1e2_6 = new ol.format.GeoJSON();
var features_Anexos18e19ParteAquticadePraiaMolen1e2_6 = format_Anexos18e19ParteAquticadePraiaMolen1e2_6.readFeatures(json_Anexos18e19ParteAquticadePraiaMolen1e2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos18e19ParteAquticadePraiaMolen1e2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos18e19ParteAquticadePraiaMolen1e2_6.addFeatures(features_Anexos18e19ParteAquticadePraiaMolen1e2_6);
var lyr_Anexos18e19ParteAquticadePraiaMolen1e2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos18e19ParteAquticadePraiaMolen1e2_6, 
                style: style_Anexos18e19ParteAquticadePraiaMolen1e2_6,
                popuplayertitle: "Anexos 18 e 19 - Parte Aquática de Praia Mole (n° 1 e 2)",
                interactive: true,
                title: '<img src="styles/legend/Anexos18e19ParteAquticadePraiaMolen1e2_6.png" /> Anexos 18 e 19 - Parte Aquática de Praia Mole (n° 1 e 2)'
            });
var format_Anexo17ParteTerrestredePraiaMole_7 = new ol.format.GeoJSON();
var features_Anexo17ParteTerrestredePraiaMole_7 = format_Anexo17ParteTerrestredePraiaMole_7.readFeatures(json_Anexo17ParteTerrestredePraiaMole_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo17ParteTerrestredePraiaMole_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo17ParteTerrestredePraiaMole_7.addFeatures(features_Anexo17ParteTerrestredePraiaMole_7);
var lyr_Anexo17ParteTerrestredePraiaMole_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo17ParteTerrestredePraiaMole_7, 
                style: style_Anexo17ParteTerrestredePraiaMole_7,
                popuplayertitle: "Anexo 17 - Parte Terrestre de Praia Mole",
                interactive: true,
                title: '<img src="styles/legend/Anexo17ParteTerrestredePraiaMole_7.png" /> Anexo 17 - Parte Terrestre de Praia Mole'
            });
var format_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8 = new ol.format.GeoJSON();
var features_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8 = format_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.readFeatures(json_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.addFeatures(features_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8);
var lyr_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8, 
                style: style_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8,
                popuplayertitle: "Anexo16 - VTMIS 03 (Entre os Canais de Acesso aos Portos de Vitória e Praia Mole)",
                interactive: true,
                title: '<img src="styles/legend/Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.png" /> Anexo16 - VTMIS 03 (Entre os Canais de Acesso aos Portos de Vitória e Praia Mole)'
            });
var format_Anexo15VTMIS01MorrodoMoreno_9 = new ol.format.GeoJSON();
var features_Anexo15VTMIS01MorrodoMoreno_9 = format_Anexo15VTMIS01MorrodoMoreno_9.readFeatures(json_Anexo15VTMIS01MorrodoMoreno_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo15VTMIS01MorrodoMoreno_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo15VTMIS01MorrodoMoreno_9.addFeatures(features_Anexo15VTMIS01MorrodoMoreno_9);
var lyr_Anexo15VTMIS01MorrodoMoreno_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo15VTMIS01MorrodoMoreno_9, 
                style: style_Anexo15VTMIS01MorrodoMoreno_9,
                popuplayertitle: "Anexo 15 - VTMIS 01 (Morro do Moreno)",
                interactive: true,
                title: '<img src="styles/legend/Anexo15VTMIS01MorrodoMoreno_9.png" /> Anexo 15 - VTMIS 01 (Morro do Moreno)'
            });
var format_Anexo14IlhadoUrubu_10 = new ol.format.GeoJSON();
var features_Anexo14IlhadoUrubu_10 = format_Anexo14IlhadoUrubu_10.readFeatures(json_Anexo14IlhadoUrubu_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo14IlhadoUrubu_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo14IlhadoUrubu_10.addFeatures(features_Anexo14IlhadoUrubu_10);
var lyr_Anexo14IlhadoUrubu_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo14IlhadoUrubu_10, 
                style: style_Anexo14IlhadoUrubu_10,
                popuplayertitle: "Anexo 14 - Ilha do Urubu",
                interactive: true,
                title: '<img src="styles/legend/Anexo14IlhadoUrubu_10.png" /> Anexo 14 - Ilha do Urubu'
            });
var format_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11 = new ol.format.GeoJSON();
var features_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11 = format_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.readFeatures(json_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.addFeatures(features_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11);
var lyr_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11, 
                style: style_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11,
                popuplayertitle: "Anexo 13 - Canal de Acesso a Píer em Capuaba (Ao Lado do Morro do Penedo)",
                interactive: true,
                title: '<img src="styles/legend/Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.png" /> Anexo 13 - Canal de Acesso a Píer em Capuaba (Ao Lado do Morro do Penedo)'
            });
var format_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12 = new ol.format.GeoJSON();
var features_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12 = format_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.readFeatures(json_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.addFeatures(features_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12);
var lyr_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12, 
                style: style_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12,
                popuplayertitle: "Anexo 12 - Área de Píer Sobre Água em Capuaba (Ao Lado do Morro do Penedo)",
                interactive: true,
                title: '<img src="styles/legend/Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.png" /> Anexo 12 - Área de Píer Sobre Água em Capuaba (Ao Lado do Morro do Penedo)'
            });
var format_Anexo11reaMartimaPrincipal_13 = new ol.format.GeoJSON();
var features_Anexo11reaMartimaPrincipal_13 = format_Anexo11reaMartimaPrincipal_13.readFeatures(json_Anexo11reaMartimaPrincipal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo11reaMartimaPrincipal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo11reaMartimaPrincipal_13.addFeatures(features_Anexo11reaMartimaPrincipal_13);
var lyr_Anexo11reaMartimaPrincipal_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo11reaMartimaPrincipal_13, 
                style: style_Anexo11reaMartimaPrincipal_13,
                popuplayertitle: "Anexo 11 - Área Marítima Principal",
                interactive: true,
                title: '<img src="styles/legend/Anexo11reaMartimaPrincipal_13.png" /> Anexo 11 - Área Marítima Principal'
            });
var format_Anexo10TerminaldeGranisLquidosBero209_14 = new ol.format.GeoJSON();
var features_Anexo10TerminaldeGranisLquidosBero209_14 = format_Anexo10TerminaldeGranisLquidosBero209_14.readFeatures(json_Anexo10TerminaldeGranisLquidosBero209_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo10TerminaldeGranisLquidosBero209_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo10TerminaldeGranisLquidosBero209_14.addFeatures(features_Anexo10TerminaldeGranisLquidosBero209_14);
var lyr_Anexo10TerminaldeGranisLquidosBero209_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo10TerminaldeGranisLquidosBero209_14, 
                style: style_Anexo10TerminaldeGranisLquidosBero209_14,
                popuplayertitle: "Anexo 10 - Terminal de Granéis Líquidos - Berço 209",
                interactive: true,
                title: '<img src="styles/legend/Anexo10TerminaldeGranisLquidosBero209_14.png" /> Anexo 10 - Terminal de Granéis Líquidos - Berço 209'
            });
var format_Anexo09reaContguaaoBero902_15 = new ol.format.GeoJSON();
var features_Anexo09reaContguaaoBero902_15 = format_Anexo09reaContguaaoBero902_15.readFeatures(json_Anexo09reaContguaaoBero902_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo09reaContguaaoBero902_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo09reaContguaaoBero902_15.addFeatures(features_Anexo09reaContguaaoBero902_15);
var lyr_Anexo09reaContguaaoBero902_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo09reaContguaaoBero902_15, 
                style: style_Anexo09reaContguaaoBero902_15,
                popuplayertitle: "Anexo 09 - Área Contígua ao Berço 902",
                interactive: true,
                title: '<img src="styles/legend/Anexo09reaContguaaoBero902_15.png" /> Anexo 09 - Área Contígua ao Berço 902'
            });
var format_Anexos05a08readeSoTorquaton123e4_16 = new ol.format.GeoJSON();
var features_Anexos05a08readeSoTorquaton123e4_16 = format_Anexos05a08readeSoTorquaton123e4_16.readFeatures(json_Anexos05a08readeSoTorquaton123e4_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos05a08readeSoTorquaton123e4_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos05a08readeSoTorquaton123e4_16.addFeatures(features_Anexos05a08readeSoTorquaton123e4_16);
var lyr_Anexos05a08readeSoTorquaton123e4_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos05a08readeSoTorquaton123e4_16, 
                style: style_Anexos05a08readeSoTorquaton123e4_16,
                popuplayertitle: "Anexos 05 a 08 - Área de São Torquato (n° 1, 2, 3 e 4)",
                interactive: true,
                title: '<img src="styles/legend/Anexos05a08readeSoTorquaton123e4_16.png" /> Anexos 05 a 08 - Área de São Torquato (n° 1, 2, 3 e 4)'
            });
var format_Anexo04readePerSobreguaemCapuaba_17 = new ol.format.GeoJSON();
var features_Anexo04readePerSobreguaemCapuaba_17 = format_Anexo04readePerSobreguaemCapuaba_17.readFeatures(json_Anexo04readePerSobreguaemCapuaba_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo04readePerSobreguaemCapuaba_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo04readePerSobreguaemCapuaba_17.addFeatures(features_Anexo04readePerSobreguaemCapuaba_17);
var lyr_Anexo04readePerSobreguaemCapuaba_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo04readePerSobreguaemCapuaba_17, 
                style: style_Anexo04readePerSobreguaemCapuaba_17,
                popuplayertitle: "Anexo 04 - Área de Píer Sobre Água em Capuaba",
                interactive: true,
                title: '<img src="styles/legend/Anexo04readePerSobreguaemCapuaba_17.png" /> Anexo 04 - Área de Píer Sobre Água em Capuaba'
            });
var format_Anexo03readeMangueemCapuaba_18 = new ol.format.GeoJSON();
var features_Anexo03readeMangueemCapuaba_18 = format_Anexo03readeMangueemCapuaba_18.readFeatures(json_Anexo03readeMangueemCapuaba_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo03readeMangueemCapuaba_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo03readeMangueemCapuaba_18.addFeatures(features_Anexo03readeMangueemCapuaba_18);
var lyr_Anexo03readeMangueemCapuaba_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo03readeMangueemCapuaba_18, 
                style: style_Anexo03readeMangueemCapuaba_18,
                popuplayertitle: "Anexo 03 - Área de Mangue em Capuaba",
                interactive: true,
                title: '<img src="styles/legend/Anexo03readeMangueemCapuaba_18.png" /> Anexo 03 - Área de Mangue em Capuaba'
            });
var format_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19 = new ol.format.GeoJSON();
var features_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19 = format_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.readFeatures(json_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.addFeatures(features_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19);
var lyr_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19, 
                style: style_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19,
                popuplayertitle: "Anexo 02 - Área Terrestre Principal do Porto no Município de Vila Velha",
                interactive: true,
                title: '<img src="styles/legend/Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.png" /> Anexo 02 - Área Terrestre Principal do Porto no Município de Vila Velha'
            });
var format_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20 = new ol.format.GeoJSON();
var features_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20 = format_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.readFeatures(json_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.addFeatures(features_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20);
var lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20, 
                style: style_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20,
                popuplayertitle: "Anexo 01 - Área Terrestre do Porto no Município de Vitória",
                interactive: true,
                title: '<img src="styles/legend/Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.png" /> Anexo 01 - Área Terrestre do Porto no Município de Vitória'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Anexo26readeDespejodeDejetosdeDragagem_1.setVisible(true);lyr_Anexo25readeEsperadosPrticos_2.setVisible(true);lyr_Anexos22a24reasdeFundeion14e6_3.setVisible(true);lyr_Anexo21BaciadeEvoluodoSuperportodeVitria_4.setVisible(true);lyr_Anexo20readoSuperportodeVitria_5.setVisible(true);lyr_Anexos18e19ParteAquticadePraiaMolen1e2_6.setVisible(true);lyr_Anexo17ParteTerrestredePraiaMole_7.setVisible(true);lyr_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.setVisible(true);lyr_Anexo15VTMIS01MorrodoMoreno_9.setVisible(true);lyr_Anexo14IlhadoUrubu_10.setVisible(true);lyr_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.setVisible(true);lyr_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.setVisible(true);lyr_Anexo11reaMartimaPrincipal_13.setVisible(true);lyr_Anexo10TerminaldeGranisLquidosBero209_14.setVisible(true);lyr_Anexo09reaContguaaoBero902_15.setVisible(true);lyr_Anexos05a08readeSoTorquaton123e4_16.setVisible(true);lyr_Anexo04readePerSobreguaemCapuaba_17.setVisible(true);lyr_Anexo03readeMangueemCapuaba_18.setVisible(true);lyr_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.setVisible(true);lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Anexo26readeDespejodeDejetosdeDragagem_1,lyr_Anexo25readeEsperadosPrticos_2,lyr_Anexos22a24reasdeFundeion14e6_3,lyr_Anexo21BaciadeEvoluodoSuperportodeVitria_4,lyr_Anexo20readoSuperportodeVitria_5,lyr_Anexos18e19ParteAquticadePraiaMolen1e2_6,lyr_Anexo17ParteTerrestredePraiaMole_7,lyr_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8,lyr_Anexo15VTMIS01MorrodoMoreno_9,lyr_Anexo14IlhadoUrubu_10,lyr_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11,lyr_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12,lyr_Anexo11reaMartimaPrincipal_13,lyr_Anexo10TerminaldeGranisLquidosBero209_14,lyr_Anexo09reaContguaaoBero902_15,lyr_Anexos05a08readeSoTorquaton123e4_16,lyr_Anexo04readePerSobreguaemCapuaba_17,lyr_Anexo03readeMangueemCapuaba_18,lyr_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19,lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20];
lyr_Anexo26readeDespejodeDejetosdeDragagem_1.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo25readeEsperadosPrticos_2.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos22a24reasdeFundeion14e6_3.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo21BaciadeEvoluodoSuperportodeVitria_4.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo20readoSuperportodeVitria_5.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos18e19ParteAquticadePraiaMolen1e2_6.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo17ParteTerrestredePraiaMole_7.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo15VTMIS01MorrodoMoreno_9.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo14IlhadoUrubu_10.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo11reaMartimaPrincipal_13.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo10TerminaldeGranisLquidosBero209_14.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo09reaContguaaoBero902_15.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos05a08readeSoTorquaton123e4_16.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo04readePerSobreguaemCapuaba_17.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo03readeMangueemCapuaba_18.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo26readeDespejodeDejetosdeDragagem_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo25readeEsperadosPrticos_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos22a24reasdeFundeion14e6_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo21BaciadeEvoluodoSuperportodeVitria_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo20readoSuperportodeVitria_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos18e19ParteAquticadePraiaMolen1e2_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo17ParteTerrestredePraiaMole_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo15VTMIS01MorrodoMoreno_9.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo14IlhadoUrubu_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo11reaMartimaPrincipal_13.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo10TerminaldeGranisLquidosBero209_14.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo09reaContguaaoBero902_15.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos05a08readeSoTorquaton123e4_16.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo04readePerSobreguaemCapuaba_17.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo03readeMangueemCapuaba_18.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo26readeDespejodeDejetosdeDragagem_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo25readeEsperadosPrticos_2.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos22a24reasdeFundeion14e6_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo21BaciadeEvoluodoSuperportodeVitria_4.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo20readoSuperportodeVitria_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos18e19ParteAquticadePraiaMolen1e2_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo17ParteTerrestredePraiaMole_7.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo16VTMIS03EntreosCanaisdeAcessoaosPortosdeVitriaePraiaMole_8.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo15VTMIS01MorrodoMoreno_9.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo14IlhadoUrubu_10.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo13CanaldeAcessoaPeremCapuabaAoLadodoMorrodoPenedo_11.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo12readePerSobreguaemCapuabaAoLadodoMorrodoPenedo_12.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo11reaMartimaPrincipal_13.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo10TerminaldeGranisLquidosBero209_14.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo09reaContguaaoBero902_15.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos05a08readeSoTorquaton123e4_16.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo04readePerSobreguaemCapuaba_17.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo03readeMangueemCapuaba_18.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo02reaTerrestrePrincipaldoPortonoMunicpiodeVilaVelha_19.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo01reaTerrestredoPortonoMunicpiodeVitria_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});