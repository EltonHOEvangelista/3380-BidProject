class Vehicle {

    constructor(_id, _title, _maker, _model, _year, _color, _engineType, _transmission, _mileage, _location, _description, _price, _sold, _imgSrc, _bids) {
        this.id = _id;
        this.title = _title;
        this.maker = _maker;
        this.model = _model;
        this.year = _year;
        this.color = _color;
        this.engineType = _engineType;
        this.transmission = _transmission;
        this.mileage = _mileage;
        this.location = _location;
        this.description = _description;
        this.price = _price;
        this.sold = _sold;
        this.imgSrc = _imgSrc;
        this.bids = _bids
    }

    setId(_id) {
        this.id = _id;
    }
    getId() {
        return this.id;
    }

    setTitle(_title) {
        this.title = _title;
    }
    getTitle() {
        return this.title;
    }

    setMaker(_maker) {
        this.maker = _maker;
    }
    getMaker() {
        return this.maker;
    }

    setModel(_model) {
        this.model = _model;
    }
    getModel() {
        return this.model;
    }

    setYear(_year) {
        this.year = _year;
    }
    getYear() {
        return this.year;
    }

    setColor(_color) {
        this.color = _color;
    }
    getColor() {
        return this.color;
    }

    setEngineType(_engineType) {
        this.engineType = _engineType;
    }
    getEngineType() {
        return this.engineType;
    }

    setTransmission(_transmission) {
        this.transmission = _transmission;
    }
    getTransmission() {
        return this.transmission;
    }

    setMileage(_mileage) {
        this.mileage = _mileage;
    }
    getMileage() {
        return this.mileage;
    }

    setLocation(_location) {
        this.location = _location;
    }
    getLocation() {
        return this.location;
    }

    setDescription(_description) {
        this.description = _description;
    }
    getDescription() {
        return this.description;
    }

    setPrice(_price) {
        this.price = _price;
    }
    getPrice() {
        return this.price;
    }

    setSold(_sold) {
        this.sold = _sold;
    }
    getSold() {
        return this.sold;
    }

    setImgSrc(_imgSrc) {
        this.imgSrc = _imgSrc;
    }
    getImgSrc() {
        return this.imgSrc;
    }

    setBids(_bids) {
        this.bids = _bids;
    }
    getBids() {
        return this.bids;
    }
}

export default Vehicle