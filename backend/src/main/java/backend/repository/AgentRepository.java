package backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import backend.model.Agent;


public interface AgentRepository 
extends JpaRepository<Agent, Long>{

    Agent findByAgentId(String agentId);

}