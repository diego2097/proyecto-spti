/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.spti.ProyectoSpti.services;

import edu.eci.spti.ProyectoSpti.model.User;
import java.util.ArrayList;

/**
 *
 * @author USUARIO
 */
public interface ServicesI {
    
    
    public void saverUser(User user);
    
    public ArrayList<User> getUsers();
    
}
