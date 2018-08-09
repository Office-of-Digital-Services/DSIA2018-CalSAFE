using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace CalSAFE.Hubs
{
    public class ReportHub : Hub
    {
        public void CheckIn(String message)
        {
            Clients.Caller.SendAsync("checkedIn", message);
        }
    }
}
