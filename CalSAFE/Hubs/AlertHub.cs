using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace CalSAFE.Hubs
{
    public class AlertHub : Hub
    {
        private String message =
            "This is an emergency notification:  \n" +
            "A fire has been reported in Sacramento County.  \n" +
            "No Evacuation order has been given at this time.  \n" +
            "More details to come.";

        public void SendAlert(String alert)
        {
            Clients.All.SendAsync("broadcastAlert", this.message);
        }
    }
}
