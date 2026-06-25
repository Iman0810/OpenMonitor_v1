package backend.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.model.Agent;

public interface AgentRepository 
extends JpaRepository<Agent, Long>{

    Optional<Agent> findByAgentId(String agentId);

}