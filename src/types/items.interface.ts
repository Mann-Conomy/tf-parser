export interface ItemGameInfo {
    [key: string]: string
}

export interface ItemQuality {
    [quality: string]: {
        value: string
    }
}

export interface ItemColor {
    [color: string]: {
        color_name: string
    }
}

export interface ItemRarity {
    [rarity: string]: {
        value: string,
        loc_key: string,
        loc_key_weapon: string,
        color: string,
        drop_sound?: string,
        next_rarity?: string,
        loot_list?: string
    }
}

export interface ItemEquipRegion {
    [shared: string]: string
}

export interface ItemEquipRegionsList {
    [region: string]: string | ItemEquipRegion;
}

export interface ItemEquipConflict {
    [conflict: string]: {
        hat?: string,
        face: string,
        lenses?: string,
        glasses?: string
    }
}

export interface ItemQuestObjectiveCondition {
    [index: string]: {
        name: string
        condition_logic: {
            type: string
            event_name: string
        }
    }
}

export interface ItemSeriesType {
    card_type_old: {
        value: string,
        loc_key: string,
        ui: string
    },
    card_type_v2: {
        value: string,
        loc_key: string,
        ui: string
    }
}

export interface CollectionItem {
    [key: string]: string
}

export interface ItemCollection {
    [collection: string]: {
        name: string
        description: string
        is_reference_collection?: string
        items: {
            [item: string]: string | CollectionItem;
        }
    }
}

export interface ItemOperation {
    [operation: string]: {
        name: string,
        gateway_item_name?: string,
        required_item_name: string,
        operation_start_date: string,
        stop_adding_to_queue_date: string,
        stop_giving_to_player_date: string,
        contracts_end_date: string,
        is_campaign: string,
        max_drop_count?: string,
        uses_credits?: string
    }
}

export interface ItemPrefabCapability {
    [capability: string]: string
}

export interface ItemPrefabMisc {
    public_prefab: string
    prefab: string
    item_type_name?: string
    static_attrs?: {
        [attribute: string]: string
    }
}

export interface ItemPrefabVisual {
    [visual: string]: {
        [item: string]: string
    }
}

export interface ItemPrefab {
    valve: unknown
    default_bundle_payment: unknown
    promo: {
        craft_class: string
        attributes: {
            [attribute: string]: {
                attribute_class: string
                value: string
            }
        }
    },
    halloween: {
        craft_class: string
        capabilities: {
            [capability: string]: string
        },
        holiday_restriction: string
    },
    dummy_item: {
        [item: string]: string
    },
    cosmetic: {
        [item: string]: string | ItemPrefabCapability
    },
    cosmetic_killeater_attribs: {
        public_prefab: string
        tags: {
            [tag: string]: string
        },
        attributes: {
            [attribute: string]: {
                attribute_class: string
                value: string
            }
        }
    },
    base_misc: ItemPrefabMisc
    misc: ItemPrefabMisc
    base_hat: ItemPrefabMisc
    hat: {
        [key: string]: string | ItemPrefabVisual
    },

}

export interface DefaultItem {
    default: {
        name: string
        prefab: string
        item_name: string
        min_ilevel: string
        max_ilevel: string
        expiration_date: string
        tool: {
            usage: {
                components: {
                    input: {
                        [index: string]: {
                            item_name?: string
                            no_item_def?: string
                            quality: string
                            counts: {
                                [count: string]: string
                            }
                        }
                    }
                }
            }
        },
        attributes: {
            [attribute: string]: {
                attribute_class: string
                value: string
            }
        }
    }
}

export interface ItemAttribute {
    [index: string]: {
        name: string
        hidden?: string
        attribute_class?: string
        description_string?: string
        description_format?: string
        effect_type?: string
        stored_as_integer?: string
    }
}

export interface ItemCriteriaTemplate {
    [criteria: string]: {
        [key: string]: string
    }
}

export interface RandomItemAttributeTemplate {
    [attribute: string]: {
        [template: string]: {
            [key: string]: string
        }
    }
}

export interface ItemLootlistJobTemplateDefinition {
    [definition: string]: {
        attribute_templates?: {
            [template: string]: string
        },
        random_attributes?: {
            [attribute: string]: {
                [key: string]: string
            }
        },
        additional_drop?: {
            loot_list: string
        }
    }
}

export interface ItemSet {
    [set: string]: {
        name: string
        items: {
            [name: string]: string
        },
        attributes?: {
            [bonus: string]: {
                attribute_class: string
                value: string
            }
        },
        store_bundle?: string
        is_hidden_set?: string
    }
}

export interface ItemClientLootListJob {
    attribute_templates?: {
        [attributes: string]: string
    },
    additional_drop?: {
        [drop: string]: string
    }
}

export interface ItemClientLootListTemplate {
    [template: string]: string
}

export interface ItemClientLootList {
    [list: string]: {
        [item: string]: string | ItemClientLootListTemplate | ItemClientLootListJob
    }
}

export interface ItemRevolvingLootList {
    [list: string]: string
}

export interface ItemRecipe {
    [id: string]: {
        name: string
        n_A: string
        desc_inputs: string
        desc_outputs: string
        di_A: string
        di_B: string
        do_A: string
        do_B: string
        always_known: string
        premium_only: string
        disabled: string,
        input_items: {
            [item: string]: {
                conditions: {
                    [condition: string]: {
                        field: string
                        operator: string
                        value: string
                        required: string
                    }
                }
            }
        },
        output_items: {
            [item: string]: {
                quality?: string
                conditions: {
                    [condition: string]: {
                        field: string
                        operator: string
                        value: string
                        required: string
                    }
                }                
            }
        },
        category: string
    }
}

export interface ItemAchievementRewardObject {
    SourceAppID?: string
    DefIndex?: string
    Items?: {
        [index: string]: string
    }
}

export interface ItemAchievementReward {
    [achievement: string]: string | ItemAchievementRewardObject
}

export interface AttachedParticleAttribute {
    system: string
}

export interface OtherAttachedParticleAttribute extends AttachedParticleAttribute {
    attachment?: string
    draw_in_viewmodel?: string
}

export interface CosmeticAttachedParticleAttribute extends AttachedParticleAttribute {
    attachment?: string
    draw_in_viewmodel?: string
    attach_to_rootbone?: string
}

export interface WeaponAttachedParticleAttribute extends AttachedParticleAttribute {
    draw_in_viewmodel: string
    use_suffix_name: string
    attachment: string
    control_point_1: string
    control_point_2: string
    control_point_3: string
    control_point_4: string
    control_point_5: string
}

export interface KillstreakAttachedParticleAttribute extends AttachedParticleAttribute {}

export interface TauntAttachedParticleAttribute {
    refire_time?: string
}

export interface ItemAttributeControlledAttachedParticle {
    other_particles: {
        [id: string]: OtherAttachedParticleAttribute
    },
    cosmetic_unusual_effects: {
        [id: string]: CosmeticAttachedParticleAttribute
    },
    weapon_unusual_effects: {
        [id: string]: WeaponAttachedParticleAttribute
    },
    killstreak_eyeglows: {
        [id: string]: KillstreakAttachedParticleAttribute
    },
    taunt_unusual_effects: {
        [id: string]: TauntAttachedParticleAttribute
    }
}

export interface ItemArmoryData {
    armory_item_classes: {
        [classes: string]: string
    },
    armory_attributes: {
        [attribute: string]: string
    },
    armory_items: {
        [item: string]: string
    }
}

export interface ItemLevelRank {
    [rank: string]: {
        score: string
    }
}

export interface ItemLevel {
    KillEaterRank: ItemLevelRank,
    SpiritOfGivingRank: ItemLevelRank,
    KillEater_HolidayPunchRank: ItemLevelRank,
    KillEater_ManTreadsRank: ItemLevelRank,
    KillEater_SapperRank: ItemLevelRank,
    KillEater_RobotsKilledRank: ItemLevelRank,
    KillEater_TimeCloakedRank: ItemLevelRank,
    KillEater_HealthGivenRank: ItemLevelRank,
    KillEater_PointsScored: ItemLevelRank,
    Journal_DuckBadge: ItemLevelRank,
    KillEater_OperationContractRank: ItemLevelRank,
    KillEater_HalloweenSoulsRank: ItemLevelRank,
    KillEater_ContractPointsEarnedRank: ItemLevelRank,
    KillEater_BackstabsAbsorbed: ItemLevelRank
}

export interface ItemKillEaterScoreType {
    [type: string]: {
        type_name: string,
        level_data?: string,
        allow_bot_victims?: string
    }
}

export interface ItemMvMMaps {
    [map: string]: {
        display_name: string,
        missions: {
            [mission: string]: {
                display_name: string,
                mode: string,
                difficulty: string,
                tour_name?: string,
                badge_slot?: string
                mannup_points?: string
            }
        }
    }
}

export interface ItemMvMTours {
    [tour: string]: {
        tour_name: string,
        badge_item_def: string,
        mission_complete_loot_list: string,
        tour_complete_loot_list: string,
        difficulty: string,
        loot_image: string,
        missions: {
            [mission: string]: string
        }
    }
}

export interface ItemMatchmakingCategories {
    [category: string]: {
        localized_name: string,
        max_excludes: string,
        valid_match_groups: {
            MatchGroup_Casual_12v12?: string
            MatchGroup_Ladder_6v6?: string
        }
    }
}

export interface ItemMap {
    [type: string]: {
        mm_type: string,
        localized_name: string,
        localized_desc: string,
        list_image: string,
        restrictions?: {
            [rescriction: string]: string
        }
        maplist: {
            [index: string]: {
                name: string,
                enabled: string
            }
        }
    }
}

export interface ItemTargetTag {
    [tag: string]: string
}

export interface ItemMasterMapsList {
    [map: string]: {
        name: string,
        localizedname: string,
        statsidentifier: string
        strangeprefixtoken?: string
        maptoken?: string,
        authors?: string
        tags?: {
            [tag: string]: string
        }
        rolling_match_tags: {
            [tag: string]: string
        },
        rolling_match_target_tags: {
            [tag: string]: string | ItemTargetTag
        }
    }
}

export interface ItemSteamPackages {
    [steam_package: string]: {
        localization_key: string
    }
}

export interface ItemStringLookup {
    [spell: string]: {
        [index: string]: string
    }
}

export interface CommunityMarketItemRemap {
    [parent: string]: {
        [child: string]: string
    }
}

export interface ItemWarDefinition {
    [index: string]: {
        name: string,
        localized_name: string,
        start_time: string,
        end_time: string,
        sides: {
            [side: string]: {
                leaderboard_name: string,
                localized_name: string
            }
        }
    }
}

/**
 * Represents a Team Fortress 2 items file parsed into a JSON object.
 */
export interface ItemsFile {
    items_game: {
        game_info: ItemGameInfo,
        qualities: ItemQuality,
        colors: ItemColor,
        rarities: ItemRarity,
        equip_regions_list: ItemEquipRegionsList,
        equip_conflict: ItemEquipConflict,
        quest_objective_conditions: ItemQuestObjectiveCondition,
        item_series_types: ItemSeriesType,
        item_collections: ItemCollection,
        operations: ItemOperation,
        prefabs: ItemPrefab
        items: DefaultItem,
        attributes: ItemAttribute,
        item_criteria_templates: ItemCriteriaTemplate,
        random_attribute_templates: RandomItemAttributeTemplate,
        lootlist_job_template_definitions: ItemLootlistJobTemplateDefinition,
        item_sets: ItemSet,
        client_loot_lists: ItemClientLootList,
        revolving_loot_lists: ItemRevolvingLootList,
        recipes: ItemRecipe,
        achievement_rewards: ItemAchievementReward,
        attribute_controlled_attached_particles: ItemAttributeControlledAttachedParticle
        armory_data: ItemArmoryData,
        item_levels: ItemLevel,
        kill_eater_score_types: ItemKillEaterScoreType,
        mvm_maps: ItemMvMMaps,
        mvm_tours: ItemMvMTours,
        matchmaking_categories: ItemMatchmakingCategories
        maps: ItemMap,
        master_maps_list: ItemMasterMapsList,
        steam_packages: ItemSteamPackages,
        string_lookups: ItemStringLookup,
        community_market_item_remaps: CommunityMarketItemRemap,
        war_definitions: ItemWarDefinition
    }
}
