/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.spti.ProyectoSpti.repositorios;

import edu.eci.spti.ProyectoSpti.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author USUARIO
 */
@Repository
public interface UserRepository  extends CrudRepository<User, Long> {
    
    
}
