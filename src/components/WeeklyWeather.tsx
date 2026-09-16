import React from "react";

const WeeklyWeather = ({ data }: { data: any }) => {
    return (
        <div>
            <section>
                Week:
                <ul>
                    {data.daily.time.map((day: string, index: number) => {
                        return (
                            <li key={day}>
                                <p>{day}</p>
                                <p>
                                    Max temperature:{" "}
                                    {data.daily.temperature_2m_max[index]}
                                </p>
                                <p>
                                    Min temperature:{" "}
                                    {data.daily.temperature_2m_min[index]}
                                </p>
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
};

export default WeeklyWeather;
