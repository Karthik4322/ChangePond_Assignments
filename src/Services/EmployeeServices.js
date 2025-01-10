import axios from 'axios';

const API_URL = 'https://localhost:5001/api/Employee';

class EmployeeService {
    getAllEmployees() {
        return axios.get(API_URL);
    }

    getEmployeeById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    addEmployee(employee) {
        return axios.post(API_URL, employee);
    }

    updateEmployee(id, employee) {
        return axios.put(`${API_URL}/${id}`, employee);
    }

    deleteEmployee(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new EmployeeService();
