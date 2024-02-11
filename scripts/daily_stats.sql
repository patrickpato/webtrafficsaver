createdb timeseriesWebApp

CREATE TABLE DAILY_VISITS_STATS(
    ID serial PRIMARY KEY, 
    Day varchar(50) NOT NULL, 
    Date date, 
    PageLoads int NOT NULL, 
    UniqueVisits int NOT NULL,
    FirstTimeVisits int NOT NULL, 
    ReturningVisits int NOT NULL
);
ALTER TABLE daily_visits_stats ALTER COLUMN date TYPE varchar(50);
COPY daily_visits_stats (day, date, pageloads, uniquevisits, firsttimevisits, returningvisits) FROM '/home/northman/Desktop/Apps/customer_timeseries/scripts/daily-website-visitors.csv' DELIMITER ',' CSV HEADER;
