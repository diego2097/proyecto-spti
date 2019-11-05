/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.spti.ProyectoSpti.services;

import edu.eci.spti.ProyectoSpti.model.User;
import edu.eci.spti.ProyectoSpti.persistence.repositorios.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author USUARIO
 */
public class ServicesImpl implements ServicesI{
    
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public void guardarUsuario(User user) {
        userRepository.save(user);
    }
    
    
    
    
}
