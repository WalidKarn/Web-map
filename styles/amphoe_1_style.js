var size = 0;
var placement = 'point';
function categories_amphoe_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,222,116,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ชาติตระการ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,223,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'นครไทย':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,230,75,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'เนินมะปราง':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,148,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'บางกระทุ่ม':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,136,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'บางระกำ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,149,81,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'พรหมพิราม':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(111,29,254,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'เมืองพิษณุโลก':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(243,192,51,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'วังทอง':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,32,65,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'วัดโบสถ์':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,158,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_amphoe_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("AMP_TH");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("AMP_TH") !== null) {
        labelText = String(feature.get("AMP_TH"));
    }
    
var style = categories_amphoe_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
