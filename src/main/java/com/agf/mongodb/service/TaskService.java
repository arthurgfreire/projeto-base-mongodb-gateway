package com.agf.mongodb.service;

import com.agf.mongodb.service.dto.TaskDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.agf.mongodb.domain.Task}.
 */
public interface TaskService {

    /**
     * Save a task.
     *
     * @param taskDTO the entity to save.
     * @return the persisted entity.
     */
    TaskDTO save(TaskDTO taskDTO);

    /**
     * Get all the tasks.
     *
     * @return the list of entities.
     */
    List<TaskDTO> findAll();


    /**
     * Get the "id" task.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<TaskDTO> findOne(String id);

    /**
     * Delete the "id" task.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
