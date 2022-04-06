import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./Context/AuthContext";


import { Dashboard } from "./Pages/Dashboard";
//import { Login3 } from "./Pages/Login";
import { Users } from './Pages/Users/listUser'
import { AddUser } from './Pages/Users/AddUser';
import { ViewUser } from './Pages/Users/viewUser';
import { EditUser } from "./Pages/Users/editUser";
import { Login4 } from './Pages/Login/Login';



function App() {
  
  return (
    <div>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login4 />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/list-user" element={<Users />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/view-user/:id" element={<ViewUser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />

              </Routes>
            </BrowserRouter>

          </AuthProvider>
        </div>
      );
    }
    
    
    export default App;
    
    
    // function App() {
    
    //   return (
    //     <div>
    //       <AuthProvider>
    //         <Router>
    //           <Routes />
    //         </Router>
    //       </AuthProvider>
    //     </div>
    
    
    //   );
    // }
