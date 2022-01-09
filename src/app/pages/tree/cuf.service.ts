import { Injectable } from '@angular/core';

export interface Host {
  ID: Number,
  HeadID: Number,
  HostName: String,
  ItemID: Number,
  Disaster: Number,
  High: Number,
  Average: Number,
  Warning: Number,
  Information: Number,
  NotClassified: Number
}

const hosts: Host[] = [{
  "ID": 1,
  "HeadID": -1,
  "HostName": "ПТК",
  "ItemID": 1,
  "Disaster": 4,
  "High": 6,
  "Warning": 20,
  "Average": 30,
  "Information": 15,
  "NotClassified": 1
}, {
  "ID": 2,
  "HeadID": 1,
  "HostName": "ПК 1",
  "ItemID": 2,
  "Disaster": 3,
  "High": 5,
  "Warning": 2,
  "Average": 4,
  "Information": 3,
  "NotClassified": 0
}, {
  "ID": 3,
  "HeadID": 1,
  "HostName": "ПК 2",
  "ItemID": 3,
  "Disaster": 2,
  "High": 4,
  "Warning": 5,
  "Average": 5,
  "Information": 3,
  "NotClassified": 1
}, {
  "ID": 4,
  "HeadID": 1,
  "HostName": "ПК 3",
  "ItemID": 4,
  "Disaster": 2,
  "High": 3,
  "Warning": 4,
  "Average": 2,
  "Information": 2,
  "NotClassified": 0
}, {
  "ID": 5,
  "HeadID": 1,
  "HostName": "ПК 4",
  "ItemID": 5,
  "Disaster": 3,
  "High": 5,
  "Warning": 1,
  "Average": 2,
  "Information": 1,
  "NotClassified": 0
}, {
  "ID": 6,
  "HeadID": 3,
  "HostName": "ПИ 11",
  "ItemID": 6,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 7,
  "HeadID": 5,
  "HostName": "ПИ 21",
  "ItemID": 7,
  "Disaster": 1,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 8,
  "HeadID": 4,
  "HostName": "ПИ 45",
  "ItemID": 8,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 9,
  "HeadID": 3,
  "HostName": "ПИ 23",
  "ItemID": 9,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 10,
  "HeadID": 2,
  "HostName": "ПИ 67",
  "ItemID": 10,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 11,
  "HeadID": 5,
  "HostName": "ПИ 76",
  "ItemID": 11,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 12,
  "HeadID": 8,
  "HostName": "ПИ 34",
  "ItemID": 12,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 13,
  "HeadID": 10,
  "HostName": "ПИ 52",
  "ItemID": 13,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 14,
  "HeadID": 10,
  "HostName": "ПИ 97",
  "ItemID": 14,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 15,
  "HeadID": 10,
  "HostName": "ПИ 79",
  "ItemID": 15,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 16,
  "HeadID": 10,
  "HostName": "АРМ 1",
  "ItemID": 16,
  "Disaster": 2,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 17,
  "HeadID": 9,
  "HostName": "АРМ 2",
  "ItemID": 17,
  "Disaster": 0,
  "High": 0,
  "Warning": 2,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 18,
  "HeadID": 9,
  "HostName": "АРМ 5",
  "ItemID": 18,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 19,
  "HeadID": 9,
  "HostName": "АРМ 8",
  "ItemID": 19,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 20,
  "HeadID": 8,
  "HostName": "ПИ 83",
  "ItemID": 20,
  "Disaster": 1,
  "High": 3,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 21,
  "HeadID": 6,
  "HostName": "ПИ 62",
  "ItemID": 21,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 22,
  "HeadID": 6,
  "HostName": "ПИ 84",
  "ItemID": 22,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 4,
  "NotClassified": 0
}, {
  "ID": 23,
  "HeadID": 6,
  "HostName": "АРМ 12",
  "ItemID": 23,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 24,
  "HeadID": 6,
  "HostName": "ПИ 40",
  "ItemID": 24,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 2,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 25,
  "HeadID": 6,
  "HostName": "ПИ 44",
  "ItemID": 25,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 26,
  "HeadID": 5,
  "HostName": "ПИ 47",
  "ItemID": 26,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 27,
  "HeadID": 5,
  "HostName": "ПИ 22",
  "ItemID": 27,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 28,
  "HeadID": 6,
  "HostName": "ПИ 35",
  "ItemID": 28,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}, {
  "ID": 29,
  "HeadID": 28,
  "HostName": "ПИ 47",
  "ItemID": 29,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 1
}, {
  "ID": 30,
  "HeadID": 5,
  "HostName": "ПИ 49",
  "ItemID": 30,
  "Disaster": 0,
  "High": 0,
  "Warning": 0,
  "Average": 0,
  "Information": 0,
  "NotClassified": 0
}];

@Injectable({
  providedIn: 'root'
})
export class CufService {
  getHosts(): Host[] {
    return hosts;
  }
}
