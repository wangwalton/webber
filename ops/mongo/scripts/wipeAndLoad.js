"use strict";
printjson(db.jobs.deleteMany({}));
printjson(
  db.jobs.insertMany([
    {
      request: {
        url: "https://www.indeed.com/jobs?q=software+engineer&l=NewYork%2CNY",
        method: "GET",
      },
      schedule: { interval: 10, startAt: 0 },
      userID: ObjectId("54651022bffebc03098b4568"),
    },
  ])
);
