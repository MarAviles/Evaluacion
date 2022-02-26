package com.example.Backend.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Plazo {

    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false )
    
    private long id;
    private Integer semanas;
    private Float tasanormal;
    private Float tasapuntual;

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public Integer getSemanas() {
        return semanas;
    }

    public void setSemanas(Integer semanas){
        this.semanas = semanas;
    }

    public Float getTasanormal() {
        return tasanormal;
    }

    public void setSemanas(Float tasanormal){
        this.tasanormal = tasanormal;
    }

    public Float getTasapuntual() {
        return tasapuntual;
    }

    public void setTasapuntual(Float tasapuntual){
        this.tasapuntual = tasapuntual;
    }

}
