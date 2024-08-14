const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('EN/index');
  });

router.get('/en', (req, res) => {
    res.render('EN/index');
});
  
router.get('/zh', (req, res) => {
    res.render('ZH/index');
});
  
router.get('/contact', (req, res) => {
  res.render('EN/contact', { pageTitle: 'Contact' });
});

router.get('/contact-en', (req, res) => {
  res.render('EN/contact', { pageTitle: 'Contact' });
});

router.get('/contact-zh', (req, res) => {
  res.render('ZH/contact', { pageTitle: 'Contact' });
});

router.get('/products', (req, res) => {
  res.render('EN/products', { pageTitle: 'Products' });
});

router.get('/products-en', (req, res) => {
  res.render('EN/products', { pageTitle: 'Products' });
});

router.get('/products-zh', (req, res) => {
  res.render('ZH/products', { pageTitle: 'Products' });
});

//5 type of Connectors
router.get('/circularConnectors-en', (req, res) => {
  res.render('EN/circularConnectors');
});
router.get('/circularConnectors-zh', (req, res) => {
  res.render('ZH/circularConnectors');
});

router.get('/circuitConnectors-en', (req, res) => {
  res.render('EN/circuitConnectors');
});
router.get('/circuitConnectors-zh', (req, res) => {
  res.render('ZH/circuitConnectors');
});

router.get('/rectangularConnectors-en', (req, res) => {
  res.render('EN/rectangularConnectors');
});
router.get('/rectangularConnectors-zh', (req, res) => {
  res.render('ZH/rectangularConnectors');
});

router.get('/RFConnectors-en', (req, res) => {
  res.render('EN/RFConnectors');
});
router.get('/RFConnectors-zh', (req, res) => {
  res.render('ZH/RFConnectors');
});

router.get('/cords-en', (req, res) => {
  res.render('EN/cords');
});
router.get('/cords-zh', (req, res) => {
  res.render('ZH/cords');
});


//Circular
router.get('/Connector1-en',(req, res) => {
  res.render('EN-Circular/Connector1.ejs');
});
router.get('/Connector1-zh',(req, res) => {
  res.render('ZH-Circular/Connector1.ejs');
});
router.get('/2CX-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/2CX-SeriesCircularConnectors.ejs');
});
router.get('/2CX-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/2CX-SeriesCircularConnectors.ejs');
});
router.get('/Connector2-en',(req, res) => {
  res.render('EN-Circular/Connector2.ejs');
});
router.get('/Connector2-zh',(req, res) => {
  res.render('ZH-Circular/Connector2.ejs');
});
router.get('/Connector3-en',(req, res) => {
  res.render('EN-Circular/Connector3.ejs');
});
router.get('/Connector3-zh',(req, res) => {
  res.render('ZH-Circular/Connector3.ejs');
});
router.get('/CXCH-01-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/CXCH-01-SeriesCircularConnectors.ejs');
});
router.get('/CXCH-01-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/CXCH-01-SeriesCircularConnectors.ejs');
});
router.get('/CXCH-SeriesCircularConnectors',(req, res) => {
  res.render('EN-Circular/CXCH-SeriesCircularConnectors.ejs');
});
router.get('/CXCH-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/CXCH-SeriesCircularConnectors.ejs');
});
router.get('/CX-ModelSmallCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/CX-ModelSmallCircularConnectors.ejs');
});
router.get('/CX-ModelSmallCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/CX-ModelSmallCircularConnectors.ejs');
});
router.get('/FQ-SnapOnWaterproofSeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/FQ-SnapOnWaterproofSeriesCircularConnectors.ejs');
});
router.get('/FQ-SnapOnWaterproofSeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/FQ-SnapOnWaterproofSeriesCircularConnectors.ejs');
});
router.get('/FX-SeriesWaterproofCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/FX-SeriesWaterproofCircularConnectors.ejs');
});
router.get('/FX-SeriesWaterproofCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/FX-SeriesWaterproofCircularConnectors.ejs');
});
router.get('/GJB598-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/GJB598-SeriesCircularConnectors.ejs');
});
router.get('/GJB598-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/GJB598-SeriesCircularConnectors.ejs');
});
router.get('/GJB599III-CompositeMaterialCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/GJB599III-CompositeMaterialCircularConnectors.ejs');
});
router.get('/GJB599III-CompositeMaterialCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/GJB599III-CompositeMaterialCircularConnectors.ejs');
});
router.get('/GJB599-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/GJB599-SeriesCircularConnectors.ejs');
});
router.get('/GJB599-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/GJB599-SeriesCircularConnectors.ejs');
});
router.get('/HJ-02-SeriesConnectors-en',(req, res) => {
  res.render('EN-Circular/HJ-02-SeriesConnectors.ejs');
});
router.get('/HJ-02-SeriesConnectors-zh',(req, res) => {
  res.render('ZH-Circular/HJ-02-SeriesConnectors.ejs');
});
router.get('/HJ-03-SeriesConnectors-en',(req, res) => {
  res.render('EN-Circular/HJ-03-SeriesConnectors.ejs');
});
router.get('/HJ-03-SeriesConnectors-zh',(req, res) => {
  res.render('ZH-Circular/HJ-03-SeriesConnectors.ejs');
});
router.get('/JY24767-24768-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/JY24767-24768-SeriesCircularConnectors.ejs');
});
router.get('/JY24767-24768-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/JY24767-24768-SeriesCircularConnectors.ejs');
});
router.get('/KH-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/KH-SeriesCircularConnectors.ejs');
});
router.get('/KH-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/KH-SeriesCircularConnectors.ejs');
});
router.get('/P-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/P-SeriesCircularConnectors.ejs');
});
router.get('/P-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/P-SeriesCircularConnectors.ejs');
});
router.get('/TCX3-MicrominiatureSeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/TCX3-MicrominiatureSeriesCircularConnectors.ejs');
});
router.get('/TCX3-MicrominiatureSeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/TCX3-MicrominiatureSeriesCircularConnectors.ejs');
});
router.get('/TY-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/TY-SeriesCircularConnectors.ejs');
});
router.get('/TY-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/TY-SeriesCircularConnectors.ejs');
});
router.get('/XCA-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XCA-SeriesCircularConnectors.ejs');
});
router.get('/XCA-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XCA-SeriesCircularConnectors.ejs');
});
router.get('/XCD-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XCD-SeriesCircularConnectors.ejs');
});
router.get('/XCD-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XCD-SeriesCircularConnectors.ejs');
});
router.get('/XCE-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XCE-SeriesCircularConnectors.ejs');
});
router.get('/XCE-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XCE-SeriesCircularConnectors.ejs');
});
router.get('/XCF-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XCF-SeriesCircularConnectors.ejs');
});
router.get('/XCF-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XCF-SeriesCircularConnectors.ejs');
});
router.get('/XCG-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XCG-SeriesCircularConnectors.ejs');
});
router.get('/XCG-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XCG-SeriesCircularConnectors.ejs');
});
router.get('/XCM-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XCM-SeriesCircularConnectors.ejs');
});
router.get('/XCM-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XCM-SeriesCircularConnectors.ejs');
});
router.get('/XC-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/XC-SeriesCircularConnectors.ejs');
});
router.get('/XC-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/XC-SeriesCircularConnectors.ejs');
});
router.get('/X-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/X-SeriesCircularConnectors.ejs');
});
router.get('/X-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/X-SeriesCircularConnectors.ejs');
});
router.get('/Y2-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y2-SeriesCircularConnectors.ejs');
});
router.get('/Y2-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y2-SeriesCircularConnectors.ejs');
});
router.get('/Y3A-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y3A-SeriesCircularConnectors.ejs');
});
router.get('/Y3A-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y3A-SeriesCircularConnectors.ejs');
});
router.get('/Y3B-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y3B-SeriesCircularConnectors.ejs');
});
router.get('/Y3B-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y3B-SeriesCircularConnectors.ejs');
});
router.get('/Y3-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y3-SeriesCircularConnectors.ejs');
});
router.get('/Y3-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y3-SeriesCircularConnectors.ejs');
});
router.get('/Y4-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y4-SeriesCircularConnectors.ejs');
});
router.get('/Y4-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y4-SeriesCircularConnectors.ejs');
});
router.get('/Y8C-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y8C-SeriesCircularConnectors.ejs');
});
router.get('/Y8C-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y8C-SeriesCircularConnectors.ejs');
});
router.get('/Y11-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y11-SeriesCircularConnectors.ejs');
});
router.get('/Y11-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y11-SeriesCircularConnectors.ejs');
});
router.get('/Y16-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y16-SeriesCircularConnectors.ejs');
});
router.get('/Y16-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y16-SeriesCircularConnectors.ejs');
});
router.get('/Y17-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y17-SeriesCircularConnectors.ejs');
});
router.get('/Y17-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y17-SeriesCircularConnectors.ejs');
});
router.get('/Y25-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y25-SeriesCircularConnectors.ejs');
});
router.get('/Y25-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y25-SeriesCircularConnectors.ejs');
});
router.get('/Y27-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y27-SeriesCircularConnectors.ejs');
});
router.get('/Y27-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y27-SeriesCircularConnectors.ejs');
});
router.get('/Y50DX-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y50DX-SeriesCircularConnectors.ejs');
});
router.get('/Y50DX-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y50DX-SeriesCircularConnectors.ejs');
});
router.get('/Y50EX-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y50EX-SeriesCircularConnectors.ejs');
});
router.get('/Y50EX-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y50EX-SeriesCircularConnectors.ejs');
});
router.get('/Y50X-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/Y50X-SeriesCircularConnectors.ejs');
});
router.get('/Y50X-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/Y50X-SeriesCircularConnectors.ejs');
});
router.get('/YA-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YA-SeriesCircularConnectors.ejs');
});
router.get('/YA-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YA-SeriesCircularConnectors.ejs');
});
router.get('/YB-SeriesICircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YB-SeriesICircularConnectors.ejs');
});
router.get('/YB-SeriesICircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YB-SeriesICircularConnectors.ejs');
});
router.get('/YB-SeriesIICircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YB-SeriesIICircularConnectors.ejs');
});
router.get('/YB-SeriesIICircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YB-SeriesIICircularConnectors.ejs');
});
router.get('/YC-SeriesHighDensitySmallCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YC-SeriesHighDensitySmallCircularConnectors.ejs');
});
router.get('/YC-SeriesHighDensitySmallCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YC-SeriesHighDensitySmallCircularConnectors.ejs');
});
router.get('/YDA-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YDA-SeriesCircularConnectors.ejs');
});
router.get('/YDA-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YDA-SeriesCircularConnectors.ejs');
});
router.get('/YGD-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YGD-SeriesCircularConnectors.ejs');
});
router.get('/YGD-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YGD-SeriesCircularConnectors.ejs');
});
router.get('/YLD-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YLD-SeriesCircularConnectors.ejs');
});
router.get('/YLD-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YLD-SeriesCircularConnectors.ejs');
});
router.get('/YL-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YL-SeriesCircularConnectors.ejs');
});
router.get('/YL-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YL-SeriesCircularConnectors.ejs');
});
router.get('/YMA-YMB-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YMA-YMB-SeriesCircularConnectors.ejs');
});
router.get('/YMA-YMB-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YMA-YMB-SeriesCircularConnectors.ejs');
});
router.get('/YMC-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YMC-SeriesCircularConnectors.ejs');
});
router.get('/YMC-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YMC-SeriesCircularConnectors.ejs');
});
router.get('/YMD-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YMD-SeriesCircularConnectors.ejs');
});
router.get('/YMD-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YMD-SeriesCircularConnectors.ejs');
});
router.get('/YMG-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YMG-SeriesCircularConnectors.ejs');
});
router.get('/YMG-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YMG-SeriesCircularConnectors.ejs');
});
router.get('/YMH-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YMH-SeriesCircularConnectors.ejs');
});
router.get('/ConYMH-SeriesCircularConnectorsnector2-zh',(req, res) => {
  res.render('ZH-Circular/YMH-SeriesCircularConnectors.ejs');
});
router.get('/ConnectYP-SeriesCircularConnectorsor3-en',(req, res) => {
  res.render('EN-Circular/YP-SeriesCircularConnectors.ejs');
});
router.get('/YP-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YP-SeriesCircularConnectors.ejs');
});
router.get('/YQ3-CircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YQ3-CircularConnectors.ejs');
});
router.get('/YQ3-CircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YQ3-CircularConnectors.ejs');
});
router.get('/YQ5-CircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YQ5-CircularConnectors.ejs');
});
router.get('/YQ5-CircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YQ5-CircularConnectors.ejs');
});
router.get('/YQ6-CircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YQ6-CircularConnectors.ejs');
});
router.get('/YQ6-CircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YQ6-CircularConnectors.ejs');
});
router.get('/YQ8-CircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YQ8-CircularConnectors.ejs');
});
router.get('/YQ8-CircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YQ8-CircularConnectors.ejs');
});
router.get('/YR-SeriesHighCurrentHighVoltageResistanceCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YR-SeriesHighCurrentHighVoltageResistanceCircularConnectors.ejs');
});
router.get('/YR-SeriesHighCurrentHighVoltageResistanceCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YR-SeriesHighCurrentHighVoltageResistanceCircularConnectors.ejs');
});
router.get('/YW-CircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YW-CircularConnectors.ejs');
});
router.get('/YW-CircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YW-CircularConnectors.ejs');
});
router.get('/YX-SeriesCircularConnectors-en',(req, res) => {
  res.render('EN-Circular/YX-SeriesCircularConnectors.ejs');
});
router.get('/YX-SeriesCircularConnectors-zh',(req, res) => {
  res.render('ZH-Circular/YX-SeriesCircularConnectors.ejs');
});

//Circuit
router.get('/BullhornSocket-en',(req, res) => {
  res.render('EN-Circuit/BullhornSocket.ejs');
});
router.get('/BullhornSocket-zh',(req, res) => {
  res.render('ZH-Circuit/BullhornSocket.ejs');
});
router.get('/EuropeanStyleSocket-en',(req, res) => {
  res.render('EN-Circuit/EuropeanStyleSocket.ejs');
});
router.get('/EuropeanStyleSocket-zh',(req, res) => {
  res.render('ZH-Circuit/EuropeanStyleSocket.ejs');
});
router.get('/HJ035SeriesCurcuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ035SeriesCurcuitConnectors.ejs');
});
router.get('/HJ035SeriesCurcuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ035SeriesCurcuitConnectors.ejs');
});
router.get('/HJ040SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ040SeriesCircuitConnectors.ejs');
});
router.get('/HJ040SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ040SeriesCircuitConnectors.ejs');
});
router.get('/HJ043SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ043SeriesCircuitConnectors.ejs');
});
router.get('/HJ043SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ043SeriesCircuitConnectors.ejs');
});
router.get('/HJ044SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ044SeriesCircuitConnectors.ejs');
});
router.get('/HJ044SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ044SeriesCircuitConnectors.ejs');
});
router.get('/HJ045SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ045SeriesCircuitConnectors.ejs');
});
router.get('/HJ045SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ045SeriesCircuitConnectors.ejs');
});
router.get('/HJ046SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ046SeriesCircuitConnectors.ejs');
});
router.get('/HJ046SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ046SeriesCircuitConnectors.ejs');
});
router.get('/HJ047SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ047SeriesCircuitConnectors.ejs');
});
router.get('/HJ047SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ047SeriesCircuitConnectors.ejs');
});
router.get('/HJ048SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ048SeriesCircuitConnectors.ejs');
});
router.get('/HJ048SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ048SeriesCircuitConnectors.ejs');
});
router.get('/HJ058SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ058SeriesCircuitConnectors.ejs');
});
router.get('/HJ058SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ058SeriesCircuitConnectors.ejs');
});
router.get('/HJ059SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ059SeriesCircuitConnectors.ejs');
});
router.get('/HJ059SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ059SeriesCircuitConnectors.ejs');
});
router.get('/HJ060SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ060SeriesCircuitConnectors.ejs');
});
router.get('/HJ060SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ060SeriesCircuitConnectors.ejs');
});
router.get('/HJ061SeriesCircuitConnectors-en',(req, res) => {
  res.render('EN-Circuit/HJ061SeriesCircuitConnectors.ejs');
});
router.get('/HJ061SeriesCircuitConnectors-zh',(req, res) => {
  res.render('ZH-Circuit/HJ061SeriesCircuitConnectors.ejs');
});
router.get('/PinHeader-en',(req, res) => {
  res.render('EN-Circuit/PinHeader.ejs');
});
router.get('/PinHeader-zh',(req, res) => {
  res.render('ZH-Circuit/PinHeader.ejs');
});
router.get('/SMP-KHD-en',(req, res) => {
  res.render('EN-Circuit/SMP-KHD.ejs');
});
router.get('/SMP-KHD-zh',(req, res) => {
  res.render('ZH-Circuit/SMP-KHD.ejs');
});
router.get('/SSMP-KHD-en',(req, res) => {
  res.render('EN-Circuit/SSMP-KHD.ejs');
});
router.get('/SSMP-KHD-zh',(req, res) => {
  res.render('ZH-Circuit/SSMP-KHD.ejs');
});
router.get('/WiringTerminal-en',(req, res) => {
  res.render('EN-Circuit/WiringTerminal.ejs');
});
router.get('/WiringTerminal-zh',(req, res) => {
  res.render('ZH-Circuit/WiringTerminal.ejs');
});

//Cords
router.get('/Cord-en',(req, res) => {
  res.render('EN-Cords/Cord.ejs');
});
router.get('/Cord-zh',(req, res) => {
  res.render('ZH-Cords/Cord.ejs');
});
router.get('/Cord2-en',(req, res) => {
  res.render('EN-Cords/Cord2.ejs');
});
router.get('/Cord2-zh',(req, res) => {
  res.render('ZH-Cords/Cord2.ejs');
});
router.get('/Cord3-en',(req, res) => {
  res.render('EN-Cords/Cord3.ejs');
});
router.get('/Cord3-zh',(req, res) => {
  res.render('ZH-Cords/Cord3.ejs');
});
router.get('/Cord4-en',(req, res) => {
  res.render('EN-Cords/Cord4.ejs');
});
router.get('/Cord4-zh',(req, res) => {
  res.render('ZH-Cords/Cord4.ejs');
});
router.get('/Cord5-en',(req, res) => {
  res.render('EN-Cords/Cord5.ejs');
});
router.get('/Cord5-zh',(req, res) => {
  res.render('ZH-Cords/Cord5.ejs');
});
router.get('/Cord6-en',(req, res) => {
  res.render('EN-Cords/Cord6.ejs');
});
router.get('/Cord6-zh',(req, res) => {
  res.render('ZH-Cords/Cord6.ejs');
});
router.get('/Cord7-en',(req, res) => {
  res.render('EN-Cords/Cord7.ejs');
});
router.get('/Cord7-zh',(req, res) => {
  res.render('ZH-Cords/Cord7.ejs');
});
router.get('/HighFrequencyCoaxialCable-en',(req, res) => {
  res.render('EN-Cords/HighFrequencyCoaxialCable.ejs');
});
router.get('/HighFrequencyCoaxialCable-zh',(req, res) => {
  res.render('ZH-Cords/HighFrequencyCoaxialCable.ejs');
});
router.get('/MicrowaveLowLossCoaxialLLSeriesCables-en',(req, res) => {
  res.render('EN-Cords/MicrowaveLowLossCoaxialLLSeriesCables.ejs');
});
router.get('/MicrowaveLowLossCoaxialLLSeriesCables-zh',(req, res) => {
  res.render('ZH-Cords/MicrowaveLowLossCoaxialLLSeriesCables.ejs');
});
router.get('/MicrowaveLowLossTriaxialTCSeriesCables-en',(req, res) => {
  res.render('EN-Cords/MicrowaveLowLossTriaxialTCSeriesCables.ejs');
});
router.get('/MicrowaveLowLossTriaxialTCSeriesCables-zh',(req, res) => {
  res.render('ZH-Cords/MicrowaveLowLossTriaxialTCSeriesCables.ejs');
});
router.get('/MicrowaveStabilizedSameAxisMCSeriesCables-en',(req, res) => {
  res.render('EN-Cords/MicrowaveStabilizedSameAxisMCSeriesCables.ejs');
});
router.get('/MicrowaveStabilizedSameAxisMCSeriesCables-zh',(req, res) => {
  res.render('ZH-Cords/MicrowaveStabilizedSameAxisMCSeriesCables.ejs');
});
//Rectangular
router.get('/CDbSeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/CDbSeriesRectangularConnectors.ejs');
});
router.get('/CDbSeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/CDbSeriesRectangularConnectors.ejs');
});
router.get('/CRM2SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/CRM2SeriesRectangularConnectors.ejs');
});
router.get('/CRM2SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/CRM2SeriesRectangularConnectors.ejs');
});
router.get('/CRM3SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/CRM3SeriesRectangularConnectors.ejs');
});
router.get('/CRM3SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/CRM3SeriesRectangularConnectors.ejs');
});
router.get('/DE-9SLS-en',(req, res) => {
  res.render('EN-Rectangular/DE-9SLS.ejs');
});
router.get('/DE-9SLS-zh',(req, res) => {
  res.render('ZH-Rectangular/DE-9SLS.ejs');
});
router.get('/DSeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/DSeriesRectangularConnectors.ejs');
});
router.get('/DSeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/DSeriesRectangularConnectors.ejs');
});
router.get('/55DXSMSeriesRectangularConnectors55-en',(req, res) => {
  res.render('EN-Rectangular/DXSMSeriesRectangularConnectors.ejs');
});
router.get('/DXSMSeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/DXSMSeriesRectangularConnectors.ejs');
});
router.get('/HJ34SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/HJ34SeriesRectangularConnectors.ejs');
});
router.get('/HJ34SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/HJ34SeriesRectangularConnectors.ejs');
});
router.get('/HJ39SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/HJ39SeriesRectangularConnectors.ejs');
});
router.get('/HJ39SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/HJ39SeriesRectangularConnectors.ejs');
});
router.get('/J3-396-4TKS-en',(req, res) => {
  res.render('EN-Rectangular/J3-396-4TKS.ejs');
});
router.get('/J3-396-4TKS-zh',(req, res) => {
  res.render('ZH-Rectangular/J3-396-4TKS.ejs');
});
router.get('/J3-396-4TKYS-1-en',(req, res) => {
  res.render('EN-Rectangular/J3-396-4TKYS-1.ejs');
});
router.get('/J3-396-4TKYS-1-zh',(req, res) => {
  res.render('ZH-Rectangular/J3-396-4TKYS-1.ejs');
});
router.get('/J3-396-4ZJBS-en',(req, res) => {
  res.render('EN-Rectangular/J3-396-4ZJBS.ejs');
});
router.get('/J3-396-4ZJBS-zh',(req, res) => {
  res.render('ZH-Rectangular/J3-396-4ZJBS.ejs');
});
router.get('/J3-396-4ZJBS-1-en',(req, res) => {
  res.render('EN-Rectangular/J3-396-4ZJBS-1.ejs');
});
router.get('/J3-396-4ZJBS-1-zh',(req, res) => {
  res.render('ZH-Rectangular/J3-396-4ZJBS-1.ejs');
});
router.get('/5J3SeriesRectangularConnectors555-en',(req, res) => {
  res.render('EN-Rectangular/J3SeriesRectangularConnectors.ejs');
});
router.get('/J3SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J3SeriesRectangularConnectors.ejs');
});
router.get('/J10SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J10SeriesRectangularConnectors.ejs');
});
router.get('/J10SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J10SeriesRectangularConnectors.ejs');
});
router.get('/55J14ASeriesMicroRectangularConnectors55-en',(req, res) => {
  res.render('EN-Rectangular/J14ASeriesMicroRectangularConnectors.ejs');
});
router.get('/J14ASeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J14ASeriesMicroRectangularConnectors.ejs');
});
router.get('/J27ASeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J27ASeriesRectangularConnectors.ejs');
});
router.get('/J27ASeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J27ASeriesRectangularConnectors.ejs');
});
router.get('/J29ASeriesMicroRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J29ASeriesMicroRectangularConnectors.ejs');
});
router.get('/J29ASeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J29ASeriesMicroRectangularConnectors.ejs');
});
router.get('/J29SeriesMicroRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J29SeriesMicroRectangularConnectors.ejs');
});
router.get('/J29SeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J29SeriesMicroRectangularConnectors.ejs');
});
router.get('/J30JSeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J30JSeriesRectangularConnectors.ejs');
});
router.get('/J30JSeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J30JSeriesRectangularConnectors.ejs');
});
router.get('/J30JYSeriesMicroRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J30JYSeriesMicroRectangularConnectors.ejs');
});
router.get('/J30JYSeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J30JYSeriesMicroRectangularConnectors.ejs');
});
router.get('/J30JZSeriesMicroRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J30JZSeriesMicroRectangularConnectors.ejs');
});
router.get('/J30JZSeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J30JZSeriesMicroRectangularConnectors.ejs');
});
router.get('/J30SeriesMicroRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J30SeriesMicroRectangularConnectors.ejs');
});
router.get('/J30SeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J30SeriesMicroRectangularConnectors.ejs');
});
router.get('/J39ASeriesMicroRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J39ASeriesMicroRectangularConnectors.ejs');
});
router.get('/J39ASeriesMicroRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J39ASeriesMicroRectangularConnectors.ejs');
});
router.get('/J56SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J56SeriesRectangularConnectors.ejs');
});
router.get('/J56SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J56SeriesRectangularConnectors.ejs');
});
router.get('/J58SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J58SeriesRectangularConnectors.ejs');
});
router.get('/J58SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J58SeriesRectangularConnectors.ejs');
});
router.get('/J60JMicroRectangularElectricalConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J60JMicroRectangularElectricalConnectors.ejs');
});
router.get('/5J60JMicroRectangularElectricalConnectors55-zh',(req, res) => {
  res.render('ZH-Rectangular/J60JMicroRectangularElectricalConnectors.ejs');
});
router.get('/J63ASeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J63ASeriesRectangularConnectors.ejs');
});
router.get('/J63ASeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J63ASeriesRectangularConnectors.ejs');
});
router.get('/J66SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/J66SeriesRectangularConnectors.ejs');
});
router.get('/J66SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/J66SeriesRectangularConnectors.ejs');
});
router.get('/JL17-03SeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/JL17-03SeriesRectangularConnectors.ejs');
});
router.get('/JL17-03SeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/JL17-03SeriesRectangularConnectors.ejs');
});
router.get('/Y34MSeriesRectangularConnectors-en',(req, res) => {
  res.render('EN-Rectangular/Y34MSeriesRectangularConnectors.ejs');
});
router.get('/Y34MSeriesRectangularConnectors-zh',(req, res) => {
  res.render('ZH-Rectangular/Y34MSeriesRectangularConnectors.ejs');
});


//RF
router.get('/2.92SeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/2.92SeriesRFCoaxialConnectors.ejs');
});
router.get('/2.92SeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/2.92SeriesRFCoaxialConnectors.ejs');
});
router.get('/4.1-9.5SeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/4.1-9.5SeriesRFCoaxialConnectors.ejs');
});
router.get('/4.1-9.5SeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/4.1-9.5SeriesRFCoaxialConnectors.ejs');
});
router.get('/4.3-10SeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/4.3-10SeriesRFCoaxialConnectors.ejs');
});
router.get('/4.3-10SeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/4.3-10SeriesRFCoaxialConnectors.ejs');
});
router.get('/7-16SeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/7-16SeriesRFCoaxialConnectors.ejs');
});
router.get('/7-16SeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/7-16SeriesRFCoaxialConnectors.ejs');
});
router.get('/BMASeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/BMASeriesRFConnectors.ejs');
});
router.get('/BMASeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/BMASeriesRFConnectors.ejs');
});
router.get('/BNCSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/BNCSeriesRFConnectors.ejs');
});
router.get('/BNCSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/BNCSeriesRFConnectors.ejs');
});
router.get('/MCXSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/MCXSeriesRFConnectors.ejs');
});
router.get('/MCXSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/MCXSeriesRFConnectors.ejs');
});
router.get('/MMCXSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/MMCXSeriesRFConnectors.ejs');
});
router.get('/MMCXSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/MMCXSeriesRFConnectors.ejs');
});
router.get('/NSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/NSeriesRFConnectors.ejs');
});
router.get('/NSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/NSeriesRFConnectors.ejs');
});
router.get('/SBMASeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/SBMASeriesRFCoaxialConnectors.ejs');
});
router.get('/SBMASeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/SBMASeriesRFCoaxialConnectors.ejs');
});
router.get('/SCSeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/SCSeriesRFCoaxialConnectors.ejs');
});
router.get('/SCSeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/SCSeriesRFCoaxialConnectors.ejs');
});
router.get('/SMA-10KFK-0012-en',(req, res) => {
  res.render('EN-RF/SMA-10KFK-0012.ejs');
});
router.get('/SMA-10KFK-0012-zh',(req, res) => {
  res.render('ZH-RF/SMA-10KFK-0012.ejs');
});
router.get('/SMA-JB2-0054-en',(req, res) => {
  res.render('EN-RF/SMA-JB2-0054.ejs');
});
router.get('/SMA-JB2-0054-zh',(req, res) => {
  res.render('ZH-RF/SMA-JB2-0054.ejs');
});
router.get('/SMA-JW5-0007-en',(req, res) => {
  res.render('EN-RF/SMA-JW5-0007.ejs');
});
router.get('/SMA-JW5-0007-zh',(req, res) => {
  res.render('ZH-RF/SMA-JW5-0007.ejs');
});
router.get('/SMA-JW6-0156-en',(req, res) => {
  res.render('EN-RF/SMA-JW6-0156.ejs');
});
router.get('/SMA-JW6-0156-zh',(req, res) => {
  res.render('ZH-RF/SMA-JW6-0156.ejs');
});
router.get('/SMA-KFD153-0143-en',(req, res) => {
  res.render('EN-RF/SMA-KFD153-0143.ejs');
});
router.get('/SMA-KFD153-0143-zh',(req, res) => {
  res.render('ZH-RF/SMA-KFD153-0143.ejs');
});
router.get('/SMA-KWHD-en',(req, res) => {
  res.render('EN-RF/SMA-KWHD.ejs');
});
router.get('/SMA-KWHD-zh',(req, res) => {
  res.render('ZH-RF/SMA-KWHD.ejs');
});
router.get('/SMA-KWHD5-0202-en',(req, res) => {
  res.render('EN-RF/SMA-KWHD5-0202.ejs');
});
router.get('/SMA-KWHD5-0202-zh',(req, res) => {
  res.render('ZH-RF/SMA-KWHD5-0202.ejs');
});
router.get('/SMA-KYB2-1-0215-en',(req, res) => {
  res.render('EN-RF/SMA-KYB2-1-0215.ejs');
});
router.get('/SMA-KYB2-1-0215-zh',(req, res) => {
  res.render('ZH-RF/SMA-KYB2-1-0215.ejs');
});
router.get('/SMA-KYWHD5-en',(req, res) => {
  res.render('EN-RF/SMA-KYWHD5.ejs');
});
router.get('/SMA-KYWHD5-zh',(req, res) => {
  res.render('ZH-RF/SMA-KYWHD5.ejs');
});
router.get('/SMA-KYWHD-0141-en',(req, res) => {
  res.render('EN-RF/SMA-KYWHD-0141.ejs');
});
router.get('/SMA-KYWHD-0141-zh',(req, res) => {
  res.render('ZH-RF/SMA-KYWHD-0141.ejs');
});
router.get('/SMASeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/SMASeriesRFConnectors.ejs');
});
router.get('/SMASeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/SMASeriesRFConnectors.ejs');
});
router.get('/SMBSeriesRFCoaxialConnectors-en',(req, res) => {
  res.render('EN-RF/SMBSeriesRFCoaxialConnectors.ejs');
});
router.get('/SMBSeriesRFCoaxialConnectors-zh',(req, res) => {
  res.render('ZH-RF/SMBSeriesRFCoaxialConnectors.ejs');
});
router.get('/SMP(L)-JHT2-0276-en',(req, res) => {
  res.render('EN-RF/SMP(L)-JHT2-0276.ejs');
});
router.get('/SMP(L)-JHT2-0276-zh',(req, res) => {
  res.render('ZH-RF/SMP(L)-JHT2-0276.ejs');
});
router.get('/SMP-JHD2-0210-en',(req, res) => {
  res.render('EN-RF/SMP-JHD2-0210.ejs');
});
router.get('/SMP-JHD2-0210-zh',(req, res) => {
  res.render('ZH-RF/SMP-JHD2-0210.ejs');
});
router.get('/SMP-JHD3-0168-en',(req, res) => {
  res.render('EN-RF/SMP-JHD3-0168.ejs');
});
router.get('/SMP-JHD3-0168-zh',(req, res) => {
  res.render('ZH-RF/SMP-JHD3-0168.ejs');
});
router.get('/SMP-JHD11-0282-en',(req, res) => {
  res.render('EN-RF/SMP-JHD11-0282.ejs');
});
router.get('/SMP-JHD11-0282-zh',(req, res) => {
  res.render('ZH-RF/SMP-JHD11-0282.ejs');
});
router.get('/SMP-JHD33-F-0177-en',(req, res) => {
  res.render('EN-RF/SMP-JHD33-F-0177.ejs');
});
router.get('/SMP-JHD33-F-0177-zh',(req, res) => {
  res.render('ZH-RF/555SMP-JHD33-F-01775.ejs');
});
router.get('/SMP-JHD33-F-0177-en',(req, res) => {
  res.render('EN-RF/SMP-JHD33-F-0177.ejs');
});
router.get('/SMP-JHD33-F-0177-zh',(req, res) => {
  res.render('ZH-RF/SMP-JHD33-F-0177.ejs');
});
router.get('/SMP-JYD1-0194-en',(req, res) => {
  res.render('EN-RF/SMP-JYD1-0194.ejs');
});
router.get('/SMP-JYD1-0194-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD1-0194.ejs');
});
router.get('/SMP-JYD11-0319-en',(req, res) => {
  res.render('EN-RF/SMP-JYD11-0319.ejs');
});
router.get('/SMP-JYD11-0319-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD11-0319.ejs');
});
router.get('/SMP-JYD13-L-0159-en',(req, res) => {
  res.render('EN-RF/SMP-JYD13-L-0159.ejs');
});
router.get('/SMP-JYD13-L-0159-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD13-L-0159.ejs');
});
router.get('/SMP-JYD31-L-en',(req, res) => {
  res.render('EN-RF/SMP-JYD31-L.ejs');
});
router.get('/SMP-JYD31-L-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD31-L.ejs');
});
router.get('/SMP-JYD31-L-0220-en',(req, res) => {
  res.render('EN-RF/SMP-JYD31-L-0220.ejs');
});
router.get('/SMP-JYD31-L-0220-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD31-L-0220.ejs');
});
router.get('/SMP-JYD-40-S-0219-en',(req, res) => {
  res.render('EN-RF/SMP-JYD-40-S-0219.ejs');
});
router.get('/SMP-JYD-40-S-0219-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD-40-S-0219.ejs');
});
router.get('/SMP-JYD105-L-1-0186-en',(req, res) => {
  res.render('EN-RF/SMP-JYD105-L-1-0186.ejs');
});
router.get('/SMP-JYD105-L-1-0186-zh',(req, res) => {
  res.render('ZH-RF/SMP-JYD105-L-1-0186.ejs');
});
router.get('/SMP-KB2-en',(req, res) => {
  res.render('EN-RF/SMP-KB2.ejs');
});
router.get('/SMP-KB2-zh',(req, res) => {
  res.render('ZH-RF/SMP-KB2.ejs');
});
router.get('/SMP-KB2-en',(req, res) => {
  res.render('EN-RF/SMP-KB2.ejs');
});
router.get('/SMP-KB2-zh',(req, res) => {
  res.render('ZH-RF/SMP-KB2.ejs');
});
router.get('/SMP-KK1-0277-en',(req, res) => {
  res.render('EN-RF/SMP-KK1-0277.ejs');
});
router.get('/SMP-KK1-0277-zh',(req, res) => {
  res.render('ZH-RF/SMP-KK1-0277.ejs');
});
router.get('/SMP-KK501-1-0275-en',(req, res) => {
  res.render('EN-RF/SMP-KK501-1-0275.ejs');
});
router.get('/SMP-KK501-1-0275-zh',(req, res) => {
  res.render('ZH-RF/SMP-KK501-1-0275.ejs');
});
router.get('/SMP-KW2-0149-en',(req, res) => {
  res.render('EN-RF/SMP-KW2-0149.ejs');
});
router.get('/SMP-KW2-0149-zh',(req, res) => {
  res.render('ZH-RF/SMP-KW2-0149.ejs');
});
router.get('/SMP-KWB1-0241-en',(req, res) => {
  res.render('EN-RF/SMP-KWB1-0241.ejs');
});
router.get('/SMP-KWB1-0241-zh',(req, res) => {
  res.render('ZH-RF/SMP-KWB1-0241.ejs');
});
router.get('/SMP-KWB2-0116-en',(req, res) => {
  res.render('EN-RF/SMP-KWB2-0116.ejs');
});
router.get('/SMP-KWB2-0116-zh',(req, res) => {
  res.render('ZH-RF/SMP-KWB2-0116.ejs');
});
router.get('/SMPSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/SMPSeriesRFConnectors.ejs');
});
router.get('/SMPSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/SMPSeriesRFConnectors.ejs');
});
router.get('/SSMA-J3-en',(req, res) => {
  res.render('EN-RF/SSMA-J3.ejs');
});
router.get('/SSMA-J3-zh',(req, res) => {
  res.render('ZH-RF/SSMA-J3.ejs');
});
router.get('/SSMA-JW3-en',(req, res) => {
  res.render('EN-RF/SSMA-JW3.ejs');
});
router.get('/SSMA-JW3-zh',(req, res) => {
  res.render('ZH-RF/SSMA-JW3.ejs');
});
router.get('/SSMBSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/SSMBSeriesRFConnectors.ejs');
});
router.get('/SSMBSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/SSMBSeriesRFConnectors.ejs');
});
router.get('/SSMPSeriesRFConnectors-en',(req, res) => {
  res.render('EN-RF/SSMPSeriesRFConnectors.ejs');
});
router.get('/SSMPSeriesRFConnectors-zh',(req, res) => {
  res.render('ZH-RF/SSMPSeriesRFConnectors.ejs');
});


router.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Format the data to store in a file
  const contactInfo = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\n`;

  // Save the data to a file
  fs.appendFile(path.join(__dirname, '../contact-info.txt'), contactInfo, (err) => {
      if (err) {
          console.error('Error saving contact information:', err);
          return res.status(500).send('Server error');
      }
      res.send('您的消息成功发送!\nYour message was successfully sent!');
  });
});


  module.exports = router;
  