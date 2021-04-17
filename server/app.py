from flask import Flask, Response, request, jsonify
import pymongo
import json
import time
import random

app = Flask(__name__)
myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["sensor_data"]
mycol = mydb["sensor_values"]


@app.route('/sensor/data/recieve', methods=['POST'])
def rec_sensor_data():
    data = request.get_json()
    mycol.insert({
        "light": data['light'],
        "air_temp": data['air_temp'],
        "air_hum": data['air_hum'],
    })
    return jsonify(res="Sensor Values updated successfully")


@app.route('/stream')
def stream():
    def sse_stream():
        while True:
            sensor_data = mycol.find()
            response = []
            for sd in sensor_data:
                response.append({
                    "light": sd['light'],
                    "air_temp": sd['air_temp'],
                    "air_hum": sd['air_hum'],
                })
            yield f"data:{json.dumps(response)}\n\n"
            time.sleep(3)

    return Response(sse_stream(), mimetype='text/event-stream')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
