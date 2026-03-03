import { useState } from 'react'
import { Link } from 'react-router-dom'

const mockEmployees = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', department: 'Engineering', role: 'Senior Developer', status: 'active' },
  { id: 2, name: 'Michael Chen', email: 'michael.c@company.com', department: 'Design', role: 'Lead Designer', status: 'active' },
  { id: 3, name: 'Emily Rodriguez', email: 'emily.r@company.com', department: 'Marketing', role: 'Marketing Manager', status: 'active' },
  { id: 4, name: 'James Wilson', email: 'james.w@company.com', department: 'Engineering', role: 'DevOps Engineer', status: 'inactive' },
  { id: 5, name: 'Lisa Anderson', email: 'lisa.a@company.com', department: 'Sales', role: 'Sales Director', status: 'active' },
  { id: 6, name: 'David Kim', email: 'david.k@company.com', department: 'Engineering', role: 'Frontend Developer', status: 'active' },
  { id: 7, name: 'Amanda White', email: 'amanda.w@company.com', department: 'HR', role: 'HR Manager', status: 'active' },
  { id: 8, name: 'Robert Taylor', email: 'robert.t@company.com', department: 'Finance', role: 'Financial Analyst', status: 'inactive' },
]

function Employees() {
  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredEmployees = mockEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === 'all' || emp.department === departmentFilter
    const matchesStatus = statusFilter === 'all' || emp.status === statusFilter
    return matchesSearch && matchesDepartment && matchesStatus
  })

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      console.log('Delete employee:', id)
    }
  }

  return (
    <>
      <div className="page-header">
        <div className="flex-between" style={{ width: '100%' }}>
          <div>
            <h1 className="page-title">Employees</h1>
            <p className="page-description">Manage your team members</p>
          </div>
          <Link to="/employees/new" className="btn btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Employee
          </Link>
        </div>
      </div>

      <div className="page-content">
        <div className="table-container">
          <div className="filters">
            <input
              type="text"
              className="search-input"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="form-select filter-select"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
            <select
              className="form-select filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan="5">
                    <div className="empty-state">
                      <div className="empty-state-text">No employees found</div>
                      <div className="empty-state-subtext">Try adjusting your filters</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredEmployees.map(emp => (
                  <tr key={emp.id}>
                    <td>
                      <div className="employee-name">{emp.name}</div>
                      <div className="employee-email">{emp.email}</div>
                    </td>
                    <td>{emp.department}</td>
                    <td>{emp.role}</td>
                    <td>
                      <span className={`badge badge-${emp.status === 'active' ? 'success' : 'warning'}`}>
                        {emp.status}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions-cell">
                        <Link to={`/employees/${emp.id}/edit`} className="btn btn-secondary btn-sm">
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(emp.id, emp.name)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Employees
