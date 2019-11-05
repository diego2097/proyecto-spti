/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.spti.ProyectoSpti.Controllers;

import edu.eci.spti.ProyectoSpti.model.User;
import edu.eci.spti.ProyectoSpti.services.ServicesI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author USUARIO
 */
@RestController
public class ApiController {

    @Autowired
    ServicesI services;

    
    
    @RequestMapping(path = "/usuarios", method = POST)
    public ResponseEntity<?> addCuenta(@RequestBody User user
    ) {
        try {
            services.guardarUsuario(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return new ResponseEntity<>("ERROR 403", HttpStatus.FORBIDDEN);
        }
    }
    
    
}









