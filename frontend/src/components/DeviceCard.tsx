interface Metric {

    deviceName: string;
    cpuUsage: number;
    ramUsage: number;
    diskUsage: number;
    timestamp: string;
    lastSeen: string;

}


function DeviceCard({ metric }: { metric: Metric }) {
    const lastSeen =
        new Date(metric.lastSeen).getTime();


    const now =
        new Date().getTime();


    const difference =
        (now - lastSeen) / 1000;


    const online =
        difference < 15;


    return (

        <div className="
bg-zinc-900
border
border-zinc-700
rounded-xl
p-6
w-80
shadow-lg
">


            <h2 className="
text-xl
font-bold
mb-4
">

                🖥️ {metric.deviceName}

            </h2>
            <p className="mb-4">

                {online ? (

                    <span className="text-green-400">
                        🟢 Online
                    </span>

                ) : (

                    <span className="text-red-400">
                        🔴 Offline
                    </span>

                )}

            </p>


            <div className="space-y-2">


                <p>
                    CPU:
                    <span className="ml-2 text-green-400">
                        {metric.cpuUsage.toFixed(2)}%
                    </span>
                </p>


                <p>
                    RAM:
                    <span className="ml-2 text-blue-400">
                        {metric.ramUsage.toFixed(2)}%
                    </span>
                </p>


                <p>
                    Disk:
                    <span className="ml-2 text-yellow-400">
                        {metric.diskUsage.toFixed(2)}%
                    </span>
                </p>
           
           
                <p className="text-sm text-gray-400 mt-4">

                    Heartbeat:

                    {new Date(lastSeen).toLocaleTimeString()}

                </p>


            </div>


        </div>

    )


}


export default DeviceCard;