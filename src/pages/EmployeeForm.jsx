import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = Boolean(id)

  const [formData, setFormData] = useState({
    firstName: isEditing ? 'Sarah' : '',
    lastName: isEditing ? 'Johnson' : '',
    email: isEditing ? 'sarah.j@company.com' : '',
    phone: isEditing ? '555-0123' : '',
    department: isEditing ? 'Engineering' : '',
    role: isEditing ? 'Senior Developer' : '',
    employmentType: isEditing ? 'full-time' : 'full-time',
    startDate: isEditing ? '2022-01-15' : '',
    salary: isEditing ? '95000' : '',
    status: isEditing ? 'active' : 'active',
    skills: isEditing ? ['React', 'TypeScript'] : [],
    bio: isEditing ? 'Experienced software developer with a passion for creating elegant solutions.' : '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      if (name === 'skills') {
        setFormData(prev => ({
          ...prev,
          skills: checked
            ? [...prev.skills, value]
            : prev.skills.filter(s => s !== value)
        }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    navigate('/employees')
  }

  const handleCancel = () => {
    navigate('/employees')
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{isEditing ? 'Edit Employee' : 'Add New Employee'}</h1>
        <p className="page-description">
          {isEditing ? 'Update employee information' : 'Fill in the details to add a new team member'}
        </p>
      </div>

      <div className="page-content">
        <div className="card">
          <div className="card-body">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-input"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-input"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number <span className="form-label-optional">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="department">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="role">
                    Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    className="form-input"
                    placeholder="e.g., Senior Developer"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Employment Type</label>
                <div className="radio-group">
                  <div className="radio-item">
                    <input
                      id="full-time"
                      name="employmentType"
                      type="radio"
                      className="radio-input"
                      value="full-time"
                      checked={formData.employmentType === 'full-time'}
                      onChange={handleChange}
                    />
                    <label className="radio-label" htmlFor="full-time">
                      Full-time
                    </label>
                  </div>
                  <div className="radio-item">
                    <input
                      id="part-time"
                      name="employmentType"
                      type="radio"
                      className="radio-input"
                      value="part-time"
                      checked={formData.employmentType === 'part-time'}
                      onChange={handleChange}
                    />
                    <label className="radio-label" htmlFor="part-time">
                      Part-time
                    </label>
                  </div>
                  <div className="radio-item">
                    <input
                      id="contractor"
                      name="employmentType"
                      type="radio"
                      className="radio-input"
                      value="contractor"
                      checked={formData.employmentType === 'contractor'}
                      onChange={handleChange}
                    />
                    <label className="radio-label" htmlFor="contractor">
                      Contractor
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="startDate">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    className="form-input"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="salary">
                    Annual Salary
                  </label>
                  <input
                    id="salary"
                    name="salary"
                    type="number"
                    className="form-input"
                    placeholder="75000"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="on-leave">On Leave</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Skills <span className="form-label-optional">(select all that apply)</span></label>
                <div className="checkbox-group">
                  {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'SQL'].map(skill => (
                    <div key={skill} className="checkbox-item">
                      <input
                        id={`skill-${skill}`}
                        name="skills"
                        type="checkbox"
                        className="checkbox-input"
                        value={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={handleChange}
                      />
                      <label className="checkbox-label" htmlFor={`skill-${skill}`}>
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="bio">
                  Bio <span className="form-label-optional">(optional)</span>
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  className="form-textarea"
                  placeholder="Brief description about the employee..."
                  value={formData.bio}
                  onChange={handleChange}
                />
                <div className="form-hint">Maximum 500 characters</div>
              </div>

              <div className="btn-group">
                <button type="submit" className="btn btn-primary">
                  {isEditing ? 'Save Changes' : 'Add Employee'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeForm
