import Status from "./Status";

const Weather = ({ data }) => {
  return (
    data && (
      <div className="mt-5 w-full flex justify-center items-center flex-col bg-white p-5 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">{data.location.name}</h1>
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        <h1 className="text-2xl font-bold">{data.current.temp_c}°C</h1>
        <p className="my-3"> {data.current.condition.text}</p>
        <Status humidity={data.current.humidity} wind={data.current.wind_kph} />
      </div>
    )
  );
};

export default Weather;
