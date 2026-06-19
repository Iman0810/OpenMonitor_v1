import { useEffect, useState } from "react";
import api from "../services/api";
import DeviceCard from "../components/DeviceCard";


function Dashboard() {


    const [metrics, setMetrics] = useState([]);



    useEffect(() => {


        const fetchData = () => {


            api.get("/metrics/latest")
                .then(res => {

                    setMetrics(res.data);

                });


        }



        fetchData();


        const interval = setInterval(fetchData, 5000);



        return () => clearInterval(interval);



    }, [])



    return (

        <div>

            <h1>
                Open Monitor Dashboard
            </h1>


            {

                metrics.map((metric: any) => (

                    <DeviceCard
                        key={metric.agentId}
                        metric={metric}
                    />


                ))


            }


        </div>


    )


}


export default Dashboard;