package com.example.Backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name="producto")
public class Producto {
    
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false )
    private Long id;

    @NotEmpty(message = "El campo nombre no debe estar vacio") @Size(min=4, max=255, message = "El campo nombre debe tener entre 3 a 255 caracteres")
    private String nombre;
    
    private Float precio;

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio){
        this.precio = precio;
    }

    public void setAll(Producto producto){
        if(producto.getNombre() != ""){
            this.setNombre(producto.getNombre());
        }

        if(producto.getPrecio() != 0){
            this.setPrecio(producto.getPrecio());
        }
    }
}
