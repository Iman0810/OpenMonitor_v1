interface Metric {

    deviceName:string;
    cpuUsage:number;
    ramUsage:number;
    diskUsage:number;

}


function DeviceCard({metric}:{metric:Metric}){


return (

<div className="card">

<h2>
{metric.deviceName}
</h2>


<p>
CPU: {metric.cpuUsage.toFixed(2)}%
</p>


<p>
RAM: {metric.ramUsage.toFixed(2)}%
</p>


<p>
Disk: {metric.diskUsage.toFixed(2)}%
</p>


</div>

)


}


export default DeviceCard;