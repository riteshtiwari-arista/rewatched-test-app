function Dashboard() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="page-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Total Employees</div>
            <div className="stat-value">247</div>
            <div className="stat-change positive">↑ 12% from last month</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Active Projects</div>
            <div className="stat-value">18</div>
            <div className="stat-change positive">↑ 3 new projects</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Avg. Performance</div>
            <div className="stat-value">87%</div>
            <div className="stat-change positive">↑ 5% improvement</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Pending Reviews</div>
            <div className="stat-value">23</div>
            <div className="stat-change negative">↓ Needs attention</div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
          </div>
          <div className="card-body">
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
              <p>Recent employee activities and updates will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
