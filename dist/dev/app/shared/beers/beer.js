"use strict";
var Beer = (function () {
    function Beer() {
        this.brand = '';
        this.name = '';
        this.type = '';
        this.unique_code = '';
        this.created_at = new Date();
        this.tasting_in_process = 0;
        this.tasting_complete = 0;
    }
    Beer.prototype.setSessionId = function (session_id) {
        this.session_id = session_id;
    };
    return Beer;
}());
exports.Beer = Beer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYmVlcnMvYmVlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUlDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFVLENBQUMsQ0FBQztRQUM5QixxQkFBZ0IsR0FBUyxDQUFDLENBQUM7SUFLNUIsQ0FBQztJQUhBLDJCQUFZLEdBQVosVUFBYSxVQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBQ0YsV0FBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksWUFBSSxPQWVoQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYmVlcnMvYmVlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCZWVyIHtcblx0aWQ6IG51bWJlcjtcblx0dXNlcl9pZDogbnVtYmVyO1xuXHRzZXNzaW9uX2lkOiBudW1iZXI7XG5cdGJyYW5kOiBzdHJpbmc9ICcnO1xuXHRuYW1lOiBzdHJpbmc9ICcnO1xuXHR0eXBlOiBzdHJpbmc9ICcnO1xuXHR1bmlxdWVfY29kZTogc3RyaW5nPSAnJztcblx0Y3JlYXRlZF9hdDogRGF0ZT0gbmV3IERhdGUoKTtcblx0dGFzdGluZ19pbl9wcm9jZXNzOiBudW1iZXI9IDA7XG5cdHRhc3RpbmdfY29tcGxldGU6IG51bWJlcj0wO1xuXHRlcnJvcjogU3RyaW5nO1xuXHRzZXRTZXNzaW9uSWQoc2Vzc2lvbl9pZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zZXNzaW9uX2lkID0gc2Vzc2lvbl9pZDtcblx0fVxufVxuIl19
