package com.agf.mongodb.service.mapper;


import com.agf.mongodb.domain.*;
import com.agf.mongodb.service.dto.RegionDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Region} and its DTO {@link RegionDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RegionMapper extends EntityMapper<RegionDTO, Region> {



    default Region fromId(String id) {
        if (id == null) {
            return null;
        }
        Region region = new Region();
        region.setId(id);
        return region;
    }
}
