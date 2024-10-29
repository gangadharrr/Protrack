// WeeklyOverview.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import "./WeeklyOverview.css";

interface DataPoint {
  name: string;
  value1: number;
  value2: number;
}

const data: DataPoint[] = [
  { name: "Mon", value1: 62, value2: 35 },
  { name: "Tues", value1: 55, value2: 25 },
  { name: "Wed", value1: 75, value2: 45 },
  { name: "Thurs", value1: 48, value2: 28 },
  { name: "Fri", value1: 68, value2: 38 },
  { name: "Sat", value1: 70, value2: 42 },
];
const WeekData = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const isWed = label === "Wed";
    return (
      <div className="custom-tooltip">
        <span>{isWed ? "20" : payload[0].value}</span>
      </div>
    );
  }
  return null;
};

const WeeklyOverview: React.FC = () => {
  return (
    <div className="weekly-overview">
      <div className="overview-content">
        {/* Left Section */}
        <div className="stats-section">
          <div className="header-section">
            <h2>Weekly Overview</h2>
          </div>

          <div className="metrics">
            <div className="main-metrics">
              <span className="number">20</span>
              <span className="percentage">+2.45%</span>
            </div>

            <div className="tasks-label">Tasks Completed</div>

            <div className="status">
              <div className="status-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>On track</span>
            </div>

            <button className="tasks-button">
              <span className="button-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M8 2v4" strokeWidth="1.5" strokeLinecap="round" />
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              OPEN TASKS
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="chart-section">
          <div className="chart-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 20V10" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 20V4" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M6 20v-6" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="chart-wrapper">
            <div className="chart-border">
              <div className="chart-content">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={data}
                    margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF5ACD" stopOpacity={0.12} />
                        <stop offset="100%" stopColor="#FF5ACD" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3DBEFF" stopOpacity={0.12} />
                        <stop offset="100%" stopColor="#3DBEFF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    
                    <XAxis 
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={false}
                      padding={{ left: 10, right: 10 }}
                    />
                    
                    <Tooltip 
                      content={<CustomTooltip />}
                      cursor={false}
                      wrapperStyle={{ outline: 'none' }}
                    />
                    
                    <Line
                      type="monotone"
                      dataKey="value1"
                      stroke="#FF5ACD"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{
                        r: 4,
                        fill: "#FF5ACD",
                        stroke: "#FFF",
                        strokeWidth: 2
                      }}
                    />
                    
                    <Line
                      type="monotone"
                      dataKey="value2"
                      stroke="#3DBEFF"
                      strokeWidth={2}
                      dot={false}
                      activeDot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>

                {/* Pink tooltip value overlay for "Wed" */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '28%', // Adjusted for shorter height
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#FF5ACD',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    zIndex: 5
                  }}
                >
                  20
                </div>
              </div>
            </div>
            {/* Week labels below border */}
            <div className="week-labels">
              {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'].map((week) => (
                <span key={week}>{week}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyOverview;
