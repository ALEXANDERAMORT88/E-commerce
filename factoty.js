"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3500;
app.use(express_1.default.json());
;
var factory = [
    {
        id: "12345678",
        name: "Your best buy",
        address: "Calle 3 con # 3 ",
        email: "Yourbestbuy3@buy.com",
        cel: 312098765,
        products: "Tv 35"
    }
];
app.get('/factory/:id', function (req, res) {
    var id = req.params.id;
    var send = factory.filter(function (item) { return item.id == id; });
    res.json(send);
});
app.post('/factory', function (req, res) {
    var body = req.body;
    factory.push(body);
    res.json("Nuevo producto creado");
});
app.put('/factory/:id', function (req, res) {
    var id = req.params.id;
    var body = req.body;
    var factoryIndex = factory.findIndex(function (item) { return item.id === id; });
    factory[factoryIndex] = body;
    res.json("Binvenidos a nuestra Fabrica");
});
app.delete('/factory/:id', function (res, req) {
    var id = req.params.id;
    var send = factory.filter(function (item) { return item.id === id; });
    factory = send;
    res.json("Producto eliminado");
});
app.listen(PORT, function () {
    console.log("La aplicacion estacorriendo en el https//localhost:" + PORT);
});
