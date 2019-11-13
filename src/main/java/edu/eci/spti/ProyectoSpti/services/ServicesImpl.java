/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.spti.ProyectoSpti.services;

import edu.eci.spti.ProyectoSpti.model.User;
import edu.eci.spti.ProyectoSpti.repositorios.UserRepository;
import java.util.ArrayList;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author USUARIO
 */
@Service
public class ServicesImpl implements ServicesI {

    @Autowired
    private UserRepository userRepository;

    @Override
    public ArrayList<User> getUsers() {
        ArrayList<User> usuarios = new ArrayList<User>();
        Iterable<User> iterator = userRepository.findAll();
        Iterator<User> it = iterator.iterator();
        while (it.hasNext()) {
            User cuenta = it.next();
            usuarios.add(cuenta);
        }
        return usuarios;
    }

    @Override
    public void saverUser(User user) {
        userRepository.save(user);
    }

}
