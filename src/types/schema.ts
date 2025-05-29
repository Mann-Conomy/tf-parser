export interface ItemQuality {
    value: string;
}

export interface ItemColor {
    color_name: string;
}

export interface ItemRarity {
    value: string;
    loc_key: string;
    loc_key_weapon: string;
    color: string;
    drop_sound?: string;
    next_rarity?: string;
    loot_list?: string;
}

export interface ItemEquipConflict {
    hat?: string;
    face: string;
    lenses?: string;
    glasses?: string;
}

export interface ItemQuestObjectiveCondition {
    name: string;
    condition_logic: {
        type: string;
        event_name: string;
    };
}

export interface ItemSeriesType {
    card_type_old: {
        value: string;
        loc_key: string;
        ui: string;
    };
    card_type_v2: {
        value: string;
        loc_key: string;
        ui: string;
    }
}

export interface ItemCollection {
    name: string;
    description: string;
    is_reference_collection?: string;
    items: Record<string, GenericItemValue>;
}

export interface ItemOperation {
    name: string;
    gateway_item_name?: string;
    required_item_name: string;
    operation_start_date: string;
    stop_adding_to_queue_date: string;
    stop_giving_to_player_date: string;
    contracts_end_date: string;
    is_campaign: string;
    max_drop_count?: string;
    uses_credits?: string;
}

export interface PrefabMisc {
    public_prefab: string;
    prefab: string;
    item_type_name?: string;
    static_attrs?: Record<string, string>;
}

export interface PrefabVisualStyle {
    skin?: string;
    name: string;
    model_player_per_class?: Record<string, string>;
}

export interface PrefabVisualTeamVariation {
    attached_models: Record<string, string>;
    custom_particlesystem: Record<string, string>;
}

export interface PrefabVisual {
    player_bodygroups?: Record<string, string>;
    animation_replacement?: Record<string, string>;
    styles?: Record<string, PrefabVisualStyle>;
}

export interface PrefabAttribute {
    attribute_class: string;
    value: string;
}

export interface PrefabTool {
    tool?: string;
    type?: string;
    use_string?: string;
    usage_capabilities?: Record<string, string>;
    usage?: {
        required_tags: Record<string, string>;
        attributes?: Record<string, string>;
    }
}

export interface PrefabCosmetic {
    public_prefab: string;
    triangle_budget_lod0: string;
    triangle_budget_lod1: string;
    triangle_budget_lod2: string;
    qc_template: string;
    loadondemand: string;
    capabilities: Record<string, string>;
    show_in_armory: string;
    item_class: string;
    item_quality: string;
    item_slot: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    drop_type: string;
    craft_class: string;
    craft_material_type: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface PrefabHat {
    public_prefab: string;
    prefab: string;
    qc_template: string;
    item_type_name: string;
    item_slot: string;
    equip_region: string;
    visuals: {
        player_bodygroups: Record<string, string>;
    };
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface PrefabTaunt {
    public_prefab: string;
    qc_template: string;
    tags: Record<string, string>;
    capabilities: Record<string, string>;
    show_in_armory: string;
    armory_desc: string;
    item_class: string;
    item_type_name: string;
    item_slot: string;
    item_quality: string;
    attributes: Record<string, PrefabAttribute>;
    static_attrs: Record<string, string>;
}

export type GenericItemValue = string | Record<string, string>;

export interface MvMRobits {
    item_class: string;
    item_type_name: string;
    show_in_armory: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    static_attrs: Record<string, string>;
}

export interface PaintCan {
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    tool: PrefabTool;
    armory_desc: string;
    armory_remap: string;
    item_type_name: string;
    item_description: string;
    image_inventory: string;
    image_inventory_overlay: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface PaintCanTeamVariant extends PaintCan {
    image_inventory_overlay2: string;
}

export interface NametagTool {
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    tool: PrefabTool;
    armory_desc: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    static_attrs: Record<string, string>;
}

export interface TournamentMedal {
    prefab: string;
    loadondemand: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: unknown;
    show_in_armory: string;
    armory_remap: string;
    item_type_name: string;
    item_slot: string;
    equip_region: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    drop_type: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface PyrovisionGoggles {
    first_sale_date: string;
    prefab: string;
    item_class: string;
    hidden: string;
    capabilities: Record<string, string>;
    loadondemand: string;
    item_name: string;
    item_type_name: string;
    item_description: string;
    item_slot: string;
    equip_region: string;
    item_quality: string;
    drop_type: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player_per_class: Record<string, string>;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface VoodooCursedItem {
    item_class: string;
    craft_material_type: string;
    item_type_name: string;
    show_in_armory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
}

export interface AshRemainsItem extends VoodooCursedItem {
    image_inventory: string;
}

export interface StrangePartRestriction {
    item_class: string;
    tool: PrefabTool;
    static_attrs: Record<string, string>;
    show_in_armory: string;
    armory_remap: string;
    item_type_name: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface StrangePart extends StrangePartRestriction {
    craft_material_type: string;
    armory_remap: string;
}

export interface ItemBase {
    item_class: string;
    tool: PrefabTool;
    static_attrs: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface KillstreakifierBase extends ItemBase {
    attributes: Record<string, PrefabAttribute>;
}

export interface DynamicRecipeBase extends ItemBase {
    craft_class: string;
    recipe_partial_complete_sound: string;
    recipe_complete_sound: string;
}

export interface DynamicQuestBase {
    item_class: string;
    craft_class: string;
    item_name: string;
    item_description: string;
    item_type_name: string;
    item_slot: string;
    equip_type: string;
    hidden: string;
    show_in_armory: string;
    image_inventory: string;
    attributes: unknown;
}

export interface MvmKillstreakRecipeBase {
    prefab: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    recipe_partial_complete_sound: string;
    recipe_complete_sound: string;
}

export interface PowerupBottle {
    item_class: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    loadondemand: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    model_player: string;
    armory_desc: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface KeylesscrateBase {
    item_class: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    chance_restricted: string;
    show_in_armory: string;
    item_slot: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Eventcratebase {
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    static_attrs: Record<string, string>;
}

export interface ItemBaseCase {
    prefab: string;
    lootlist_job_templates: Record<string, string>;
}

export interface KeylesscaseBase {
    prefab: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    chance_restricted: string;
}

export interface PaintkitKeylesscaseBase extends ItemBaseCase {
    model_player: string;
    image_inventory: string;
    item_type_name: string;
    loot_list_rare_item_footer: string;
    static_attrs: Record<string, string>;
}

export interface ItemEventkey {
    item_class: string;
    craft_class: string;
    tool: PrefabTool;
    static_attrs: Record<string, string>;
    armory_desc: string;
    show_in_armory: string;
    item_type_name: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface RandomgiftItem {
    loadondemand: string;
    item_class: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_slot: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    model_player: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface RandomgiftItemBase {
    prefab: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    min_ilevel: string;
    max_ilevel: string;
}

export interface ItemMapToken {
    capabilities: Record<string, string>;
    item_class: string;
    armory_desc: string;
    show_in_armory: string;
    item_type_name: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface HalloweenCostumeItemPiece {
    first_sale_date: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    holiday_restriction: string;
    capabilities: Record<string, string>;
    loadondemand: string;
    show_in_armory: string;
    item_type_name: string;
    min_ilevel: string;
    max_ilevel: string;
    item_quality: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    drop_type: string;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface ItemTransmogrifierBase {
    item_class: string;
    craft_class: string;
    expiration_date: string;
    capabilities: Record<string, string>;
    tool: PrefabTool;
    show_in_armory: string;
    item_type_name: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface HalloweenSpellbook {
    item_class: string;
    item_type_name: string;
    item_slot: string;
    anim_slot: string;
    attach_to_hands: string;
    act_as_weapon: string;
    capabilities: Record<string, string>;
    show_in_armory: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface HalloweenSpellbookpage {
    tool: PrefabTool;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface SpellBase {
    item_class: string;
    craft_class: string;
    expiration_date: string;
    tool: PrefabTool;
    show_in_armory: string;
    item_type_name: string;
    image_inventory: string;
    image_inventory_overlay: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface SpellBaseFootprints {
    prefab: string;
    tool?: PrefabTool;
    image_inventory: string;
    image_inventory_overlay: string;
}

export interface ZombieItem {
    prefab: string;
    item_class: string;
    capabilities: Record<string, string>;
    item_type_name: string;
    show_in_armory: string;
    armory_remap: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    item_slot: string;
    equip_region: string;
    holiday_restriction: string;
    attributes: Record<string, PrefabAttribute>;
}

export interface ClassQuestTheme {
    toughbreak_get_contract: string;
    toughbreak_get_contract_rare: string;
}

export interface CompleteQuestDemoman {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_demo: string;
}

export interface CompleteQuestEngineer {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_engie: string;
}

export interface CompleteQuestHeavy {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_heavy: string;
}

export interface CompleteQuestMedic {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_medic: string;
}

export interface CompleteQuestScout {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_scout: string;
}

export interface CompleteQuestSoldier {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_soldier: string;
}

export interface CompleteQuestSniper {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_sniper: string;
}

export interface CompleteQuestSpy {
    toughbreak_win_contract_pauling: string;
    toughbreak_win_contract_spy: string;
}

export interface CosmeticItem {
    first_sale_date: string;
    prefab: string;
    enabled: string;
    item_class: string;
    loadondemand: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    equip_region: string;
    propername: string;
    show_in_armory: string;
    item_quality: string;
    drop_type: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    xifier_class_remap: string;
    model_player_per_class: Record<string, string>;
    used_by_classes: Record<string, string>;
    visuals?: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface PromotionalItem {
    prefab: string;
    import_name: string;
    item_name: string;
    item_description: string;
    item_type_name: string;
    equip_region: string;
    image_inventory: string;
    capabilities: Record<string, string>;
    model_player: string;
    used_by_classes: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    visuals: PrefabVisual;
}

export interface BaseFlamethrower {
    item_class: string;
    prefab: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_slot: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
}

export interface Ambassador {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    item_logname: string;
    item_iconname: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Amputator {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Annihilator {
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    propername: string;
    xifier_class_remap: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface AtomLauncher {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    propername: string;
    item_name: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Axtinguisher {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface BackScratcher {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
}

export interface Backburner {
    enabled: string;
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_name: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface DefaultBat {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    inspect_panel_dist: string;
    item_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultBattleaxe {
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    image_inventory: string;
    image_inventory_size_h: string;
    model_player: string;
    propername: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface BazaarBargain {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    visuals: PrefabVisual;
    attributes: Record<string, PrefabAttribute>;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Blackbox {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
    particle_suffix: string;
}

export interface DefaultBonesaw {
    enabled: string;
    item_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface BonkDrink {
    prefab: string;
    base_item_name: string;
    item_name: string;
    inspect_panel_dist: string;
    image_inventory: string;
    model_player: string;
    xifier_class_remap: string;
}

export interface DefaultBottle {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface BuffBanner {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    equip_region: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    attach_to_hands: string;
    extra_wearable: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Claidheamohmor {
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    item_name: string;
    item_description: string;
    propername: string;
    image_inventory: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultClub {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface CrusadersCrossbow {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface Degreaser {
    enabled: string;
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_name: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface LooseCannon {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_logname: string;
    item_iconname: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    propername: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
}

export interface PersianPersuader {
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_name: string;
    item_description: string;
    item_logname: string;
    item_iconname: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    model_player: string;
    anim_slot: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    visuals: PrefabVisual;
    attributes: Record<string, PrefabAttribute>;
}

export interface AliBabasWeeBooties {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    capabilities: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_slot: string;
    equip_region: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    act_as_wearable: string;
    drop_type: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Detonator {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_logname: string;
    item_iconname: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    anim_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DisciplinaryAction {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface EternalReward {
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_name: string;
    propername: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    model_player: string;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
}

export interface Eyelander {
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_name: string;
    item_description: string;
    propername: string;
    image_inventory: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface DefaultFireaxe {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface HeavyFists {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    visuals: PrefabVisual;
    static_attrs: Record<string, string>;
}

export interface DefaultFlamethrower {
    prefab: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    inspect_panel_dist: string;
    enabled: string;
    item_name: string;
    item_description: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface Flaregun {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    anim_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface ForceANature {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface FrontierJustice {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface GatlingGun {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    propername: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
}

export interface GrenadeLauncher {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface GlovesOfRunningUrgently {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    hide_bodygroups_deployed_only: string;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface FlyingGuillotine {
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    attach_to_hands: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    xifier_class_remap: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Gunboats {
    enabled: string;
    item_class: string;
    craft_material_type: string;
    loadondemand: string;
    capabilities: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    equip_region: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    act_as_wearable: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Holymackerel {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    item_quality: string;
    item_logname: string;
    item_iconname: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Huntsman {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    item_iconname: string;
    min_ilevel: string;
    max_ilevel: string;
    anim_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    attach_to_hands: string;
    flip_viewmodel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface InvisWatch {
    capabilities: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface JagWrench {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    propername: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
}

export interface Jarate {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    anim_slot: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    xifier_class_remap: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultKnife {
    inspect_panel_dist: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface Kritzkrieg {
    prefab: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    equip_region: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals_red: PrefabVisualTeamVariation;
    visuals_blu: PrefabVisualTeamVariation;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Lochnload {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_logname: string;
    item_iconname: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    propername: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
}

export interface LongHeatmaker {
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    propername: string;
    item_quality: string;
    xifier_class_remap: string;
    used_by_classes: Record<string, string>;
    visuals: PrefabVisual;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Lunchbox {
    enabled: string;
    item_class: string;
    show_in_armory: string;
    item_type_name: string;
    item_slot: string;
    anim_slot: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Machina {
    prefab: string;
    enabled: string;
    item_class: string;
    craft_material_type: string;
    craft_class: string;
    base_item_name: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    item_logname: string;
    item_iconname: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Madmilk {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_description: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    anim_slot: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    xifier_class_remap: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Medigun {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    inspect_panel_dist: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    equip_region: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface Minigun {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    visuals_mvm_boss: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface BuildingPDA {
    capabilities: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_material_type: string;
    item_name: string;
    item_type_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
    visuals: PrefabVisual;
}

export interface DefaultPistol {
    craft_class: string;
    baseitem: string;
    enabled: string;
    item_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface Powerjack {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface IronBomber {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_logname: string;
    item_iconname: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    propername: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface RedTapeRecorder {
    first_sale_date: string;
    capabilities: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    anim_slot: string;
    attach_to_hands: string;
    propername: string;
    model_player: string;
    xifier_class_remap: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface RescueRanger {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_logname: string;
    item_iconname: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface ReserveShooter {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    model_player: string;
    visuals: Record<string, PrefabAttribute>;
    attributes: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultRevolver {
    enabled: string;
    item_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
    particle_suffix: string;
}

export interface Rocketlauncher {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    visuals_mvm_boss: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface RussianRiot {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_type_name: string;
    item_logname: string;
    item_iconname: string;
    item_name: string;
    item_slot: string;
    show_in_armory: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Sandvich {
    prefab: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_name: string;
    item_description: string;
    inspect_panel_dist: string;
    image_inventory: string;
    model_player: string;
    propername: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    xifier_class_remap: string;
}

export interface DefaultSapper {
    enabled: string;
    capabilities: Record<string, string>;
    base_item_name: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_name: string;
    item_description: string;
    item_type_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    xifier_class_remap: string;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Scattergun {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface Shahanshah {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface ScorchShot {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    anim_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface ScoutDrink {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    anim_slot: string;
    item_slot: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Shortstop {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    static_attrs: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_description: string;
    item_name: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    item_logname: string;
    item_iconname: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultShotgun {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
    static_attrs: Record<string, string>;
}

export interface ShotgunMulticlass {
    prefab: string;
    enabled: string;
    item_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    baseitem: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    image_inventory: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
    particle_suffix: string;
}

export interface DefaultShovel {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultSMG {
    enabled: string;
    item_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    inspect_panel_dist: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    visuals: PrefabVisual;
    static_attrs: Record<string, string>;
    xifier_class_remap: string;
    particle_suffix: string;
}

export interface Sniperrifle {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    inspect_panel_dist: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface SodaPopper {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface DefaultSpyKnife {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    show_in_armory: string;
    item_type_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface StickybombLauncher {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    inspect_panel_dist: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface DefaultSword {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    show_in_armory: string;
    item_type_name: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    attach_to_hands: string;
    visuals: PrefabVisual;
}

export interface Syringegun {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    first_sale_date: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface ChargingTarge {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    equip_region: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    inspect_panel_dist: string;
    model_player: string;
    act_as_wearable: string;
    attach_to_hands: string;
    attach_to_hands_vm_only: string;
    drop_type: string;
    used_by_classes: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
    xifier_class_remap: string;
}

export interface Tomislav {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    item_logname: string;
    item_iconname: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
}

export interface Trenchgun {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_logname: string;
    item_iconname: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    propername: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    image_inventory: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface Ubersaw {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    base_item_name: string;
    item_logname: string;
    item_iconname: string;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_slot: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    item_quality: string;
    propername: string;
    min_ilevel: string;
    max_ilevel: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface WingerPistol {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    item_type_name: string;
    item_logname: string;
    item_iconname: string;
    item_name: string;
    item_slot: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    attach_to_hands: string;
    inspect_panel_dist: string;
    propername: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    visuals: PrefabVisual;
    mouse_pressed_sound: string;
    drop_sound: string;
}

export interface SentryWrangler {
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    capabilities: Record<string, string>;
    show_in_armory: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    inspect_panel_dist: string;
    item_slot: string;
    anim_slot: string;
    item_quality: string;
    propername: string;
    item_logname: string;
    item_iconname: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    visuals: PrefabVisual;
    tags: Record<string, string>;
    base_item_name: string;
    xifier_class_remap: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    attributes: Record<string, PrefabAttribute>;
}

export interface BuildingWrench {
    capabilities: Record<string, string>;
    tags: Record<string, string>;
    inspect_panel_dist: string;
    base_item_name: string;
    enabled: string;
    item_class: string;
    craft_class: string;
    craft_material_type: string;
    item_type_name: string;
    item_name: string;
    item_description: string;
    item_slot: string;
    item_quality: string;
    baseitem: string;
    min_ilevel: string;
    max_ilevel: string;
    image_inventory: string;
    image_inventory_size_w: string;
    image_inventory_size_h: string;
    model_player: string;
    attach_to_hands: string;
    used_by_classes: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
}

export interface PaintkitTool {
    prefab: string;
    enabled: string;
    item_class: string;
    inspect_panel_dist: string;
    tool: PrefabTool;
    capabilities: Record<string, string>;
    static_attrs: Record<string, string>;
    show_in_armory: string;
    propername: string;
    item_name: string;
    item_description: string;
    item_type_name: string;
    model_player: string;
    image_inventory: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    mouse_pressed_sound: string;
    drop_sound: string;
    particle_suffix: string;
    remapped_item_def_index: string;
}

export interface PaintkitWeapon {
    prefab: string;
    craft_class: string;
    craft_material_type: string;
    item_series: string;
    item_quality: string;
    min_ilevel: string;
    max_ilevel: string;
    enabled: string;
    tags: Record<string, string>;
    static_attrs: Record<string, string>;
    attributes: Record<string, PrefabAttribute>;
}

export interface PrefabQuestItem {
    prefab: string;
    expiration_date: string;
}

export interface PaintkitWeaponBase {
    prefab: string;
    xifier_class_remap: string;
    visuals?: Record<string, string>;
}

export interface ItemPrefab {
    valve: unknown;
    default_bundle_payment: unknown;
    promo: {
        craft_class: string;
        attributes: Record<string, PrefabAttribute>;
    };
    halloween: {
        craft_class: string;
        capabilities: Record<string, string>;
        holiday_restriction: string;
    };
    dummy_item: Record<string, string>;
    cosmetic: PrefabCosmetic;
    cosmetic_killeater_attribs: {
        public_prefab: string;
        tags: Record<string, string>;
        attributes: Record<string, PrefabAttribute>;
    };
    base_misc: PrefabMisc;
    misc: PrefabMisc;
    base_hat: PrefabMisc;
    hat: PrefabHat;
    taunt: PrefabTaunt;
    score_reward_hat: {
        prefab: string;
        craft_material_type: string;
        capabilities: Record<string, string>;
        visuals: PrefabVisual;
        used_by_classes: Record<string, string>;
        static_attrs: Record<string, string>;
    };
    hat_decoration: Record<string, string>;
    mask: Record<string, string>;
    beard: Record<string, string>;
    backpack: {
        public_prefab: string;
        prefab: string;
        item_type_name: string;
        equip_region: string;
        visuals: PrefabVisual;
    };
    grenades: {
        public_prefab: string;
        prefab: string;
        item_type_name: string;
        equip_region: string;
        visuals: PrefabVisual;
    };
    mvm_robits: MvMRobits;
    paint_can: PaintCan;
    paint_can_team_color: PaintCanTeamVariant;
    tool_nametag: NametagTool;
    tournament_medal: TournamentMedal;
    etf2l_participation_styles: {
        visuals: PrefabVisual;
    };
    pyrovision_goggles: PyrovisionGoggles;
    ash_remains: AshRemainsItem;
    strange_part: StrangePart;
    strange_part_restriction: StrangePartRestriction;
    strangifier_base: ItemBase;
    unusualifier_base: ItemBase;
    killstreakifier_base: KillstreakifierBase;
    killstreakifier_kit_basic: {
        prefab: string;
        item_description: string;
        image_inventory: string;
        attributes: Record<string, PrefabAttribute>;
    };
    dynamic_recipe_base: DynamicRecipeBase;
    dynamic_quest_base: DynamicQuestBase;
    mvm_killstreak_recipe_base: MvmKillstreakRecipeBase;
    powerup_bottle: PowerupBottle;
    no_craft: Record<string, string>;
    robokey_rules: unknown;
    eotlkey_rules: unknown;
    keylesscrate_base: KeylesscrateBase;
    keylesscrate: Record<string, string>;
    eventcratebase: Eventcratebase;
    base_case: ItemBaseCase;
    base_cosmetic_case: ItemBaseCase;
    base_keylesscase: KeylesscaseBase;
    base_keyless_cosmetic_case: ItemBaseCase;
    base_weapon_case: ItemBaseCase;
    base_paintkit_keylesscase: PaintkitKeylesscaseBase;
    eventkey: ItemEventkey;
    randomgift: RandomgiftItem;
    randomgiftself: RandomgiftItemBase;
    randomgiftserver: RandomgiftItemBase;
    marketable: {
        static_attrs: Record<string, string>;
    };
    map_token: ItemMapToken;
    halloween_costume_piece_2011: HalloweenCostumeItemPiece;
    hw2013_transmogrifier_base: ItemTransmogrifierBase;
    halloween2013: {
        first_sale_dat: string;
        craft_class: string;
        craft_material_type: string;
        tags: Record<string, string>;
        holiday_restriction: string;
    };
    halloween2013_spellbook: HalloweenSpellbook;
    halloween2013_spellbookpage: HalloweenSpellbookpage;
    halloween2014: {
        public_prefab: string;
        first_sale_date: string;
        holiday_restriction: string;
        attributes: Record<string, PrefabAttribute>;
    };
    halloween2014keylesscrate: {
        prefab: string;
        first_sale_date: string;
        holiday_restriction: string;
        item_type_name: string;
        item_description: string;
        used_by_classes: Record<string, string>;
    };
    spell_base: SpellBase;
    voice_spell_base: SpellBaseFootprints;
    spell_base_footprints: SpellBaseFootprints;
    spell_base_pumpkinbombs: {
        prefab: string;
        image_inventory: string;
        image_inventory_overlay: string;
    };
    voodoo_cursed: VoodooCursedItem;
    zombie: ZombieItem;
    quest_deprecated: {
        show_in_armory: string;
        hidden: string;
        equip_type: string;
        expiration_date: string;
        item_class: string;
        craft_class: string;
    };
    quest_prefab_1st_operation_pauling: PrefabQuestItem;
    quest_prefab_2nd_operation_pauling: PrefabQuestItem;
    quest_prefab_halloween: PrefabQuestItem;
    quest_theme_pauling_base: {
        notification_res: string;
        quest_item_res: string;
        in_game_res: string;
        sounds: {
            give_quest: Record<string, string>;
            complete_quest: Record<string, string>;
            give_reward: string;
            discard_quest: string;
        };
    };
    quest_theme_pauling_operation_1: {
        prefab: string;
    };
    quest_theme_pauling_operation_2: {
        prefab: string;
        sounds: {
            give_quest: Record<string, ClassQuestTheme>;
            complete_quest: {
                undefined: string;
                demoman: CompleteQuestDemoman;
                engineer: CompleteQuestEngineer;
                heavy: CompleteQuestHeavy;
                medic: CompleteQuestMedic;
                pyro: string;
                scout: CompleteQuestScout;
                soldier: CompleteQuestSoldier;
                sniper: CompleteQuestSniper;
                spy: CompleteQuestSpy;
            };
            fully_complete_quest: Record<string, string>;
        }
    };
    quest_theme_merasmus_base: {
        notification_res: string;
        quest_item_res: string;
        in_game_res: string;
        unack_position: string;
        sounds: {
            give_quest: Record<string, string>;
            complete_quest: Record<string, string>;
            give_reward: string;
            discard_quest: string;
        };
    };
    quest_theme_merasmus_merasmus: {
        prefab: string;
        sounds: {
            complete_quest: Record<string, string>;
            reveal_sound: string;
        };
    };
    triad_trinket: CosmeticItem;
    champ_stamp: CosmeticItem;
    marxman: CosmeticItem;
    cannonball: CosmeticItem;
    item_bak_fear_monger: PromotionalItem;
    item_bak_arkham_cowl: PromotionalItem;
    item_bak_firefly: PromotionalItem;
    weapon_atom_launcher: AtomLauncher;
    weapon_ambassador: Ambassador;
    weapon_amputator: Amputator;
    weapon_annihilator: Annihilator;
    weapon_axtinguisher: Axtinguisher;
    weapon_back_scratcher: BackScratcher;
    weapon_baseflamethrower: BaseFlamethrower;
    weapon_newflame: {
        static_attrs: Record<string, string>;
    };
    weapon_backburner: Backburner;
    weapon_bat: DefaultBat;
    weapon_sword: DefaultSword;
    weapon_battleaxe: DefaultBattleaxe;
    weapon_bazaar_sniper: BazaarBargain;
    weapon_blackbox: Blackbox;
    weapon_bonesaw: DefaultBonesaw;
    weapon_bonk: {
        prefab: string;
        base_item_name: string;
        item_name: string;
        inspect_panel_dist: string;
        image_inventory: string;
        model_player: string;
        xifier_class_remap: string;
    };
    weapon_bottle: DefaultBottle;
    weapon_buff_banner: BuffBanner;
    weapon_claidheamohmor: Claidheamohmor;
    weapon_club: DefaultClub;
    weapon_crusaders_crossbow: CrusadersCrossbow;
    weapon_degreaser: Degreaser;
    weapon_demo_cannon: LooseCannon;
    weapon_demo_sultan_sword: PersianPersuader;
    weapon_demoman_boots: AliBabasWeeBooties;
    weapon_detonator: Detonator;
    weapon_disciplinary_action: DisciplinaryAction;
    weapon_spy_knife_item2: DefaultSpyKnife;
    weapon_eternal_reward: EternalReward;
    weapon_eyelander: Eyelander;
    weapon_fireaxe: DefaultFireaxe;
    weapon_fists: HeavyFists;
    weapon_flamethrower: DefaultFlamethrower;
    weapon_flaregun: Flaregun;
    weapon_force_a_nature: ForceANature;
    weapon_frontier_justice: FrontierJustice;
    weapon_gatling_gun: GatlingGun;
    weapon_grenade_launcher: GrenadeLauncher;
    weapon_gru: GlovesOfRunningUrgently;
    weapon_gunboats: Gunboats;
    weapon_guillotine: FlyingGuillotine;
    weapon_holymackerel: Holymackerel;
    weapon_huntsman: Huntsman;
    weapon_invis: InvisWatch;
    weapon_jag: JagWrench;
    weapon_jarate: Jarate;
    weapon_knife: DefaultKnife;
    weapon_kritzkrieg: Kritzkrieg;
    weapon_lochnload: Lochnload;
    weapon_long_heatmaker: LongHeatmaker;
    weapon_sniperrifle_alt1: {
        visuals: PrefabVisual;
    };
    weapon_machina: Machina;
    weapon_madmilk: Madmilk;
    weapon_medigun: Medigun;
    weapon_melee_allclass: {
        base_item_name: string;
        visuals: PrefabVisual;
    };
    weapon_minigun: Minigun;
    weapon_pda: BuildingPDA;
    weapon_pistol: DefaultPistol;
    weapon_powerjack: Powerjack;
    weapon_quadball: IronBomber;
    weapon_red_tape_recorder: RedTapeRecorder;
    weapon_rescue_ranger: RescueRanger;
    weapon_reserve_shooter: ReserveShooter;
    weapon_revolver: DefaultRevolver;
    weapon_rocketlauncher: Rocketlauncher;
    weapon_russian_riot: RussianRiot;
    weapon_lunchbox: Lunchbox;
    weapon_sandvich: Sandvich;
    weapon_sapper: DefaultSapper;
    weapon_scattergun: Scattergun;
    weapon_scimitar: Shahanshah;
    weapon_scorch_shot: ScorchShot;
    weapon_scout_drink: ScoutDrink;
    weapon_shortstop: Shortstop;
    weapon_shotgun: DefaultShotgun;
    weapon_shotgun_multiclass: ShotgunMulticlass;
    weapon_shovel: DefaultShovel;
    weapon_smg: DefaultSMG;
    weapon_sniperrifle: Sniperrifle;
    weapon_soda_popper: SodaPopper;
    weapon_stickybomb_launcher: StickybombLauncher;
    weapon_syringegun: Syringegun;
    weapon_targe: ChargingTarge;
    weapon_tomislav: Tomislav;
    weapon_trenchgun: Trenchgun;
    weapon_ubersaw: Ubersaw;
    weapon_winger_pistol: WingerPistol;
    weapon_wrangler: SentryWrangler;
    weapon_wrench: BuildingWrench;
    paintkit_base: {
        static_attrs: Record<string, string>;
    };
    paintkit_tool: PaintkitTool;
    paintkit_weapon: PaintkitWeapon;
    paintkit_weapon_ambassador: PaintkitWeaponBase;
    paintkit_weapon_atom_launcher: PaintkitWeaponBase;
    paintkit_weapon_amputator: PaintkitWeaponBase;
    paintkit_weapon_back_scratcher: PaintkitWeaponBase;
    paintkit_weapon_battleaxe: PaintkitWeaponBase;
    paintkit_weapon_bazaar_sniper: PaintkitWeaponBase;
    paintkit_weapon_blackbox: PaintkitWeaponBase;
    paintkit_weapon_claidheamohmor: PaintkitWeaponBase;
    paintkit_weapon_crusaders_crossbow: PaintkitWeaponBase;
    paintkit_weapon_demo_cannon: PaintkitWeaponBase;
    paintkit_weapon_demo_sultan_sword: PaintkitWeaponBase;
    paintkit_weapon_degreaser: PaintkitWeaponBase;
    paintkit_weapon_detonator: PaintkitWeaponBase;
    paintkit_weapon_disciplinary_action: PaintkitWeaponBase;
    paintkit_weapon_flamethrower: PaintkitWeaponBase;
    paintkit_weapon_gatling_gun: PaintkitWeaponBase;
    paintkit_weapon_grenadelauncher: PaintkitWeaponBase;
    paintkit_weapon_holymackerel: PaintkitWeaponBase;
    paintkit_weapon_jag: PaintkitWeaponBase;
    paintkit_weapon_knife: PaintkitWeaponBase;
    paintkit_weapon_lochnload: PaintkitWeaponBase;
    paintkit_weapon_medigun: PaintkitWeaponBase;
    paintkit_weapon_minigun: PaintkitWeaponBase;
    paintkit_weapon_pistol: PaintkitWeaponBase;
    paintkit_weapon_powerjack: PaintkitWeaponBase;
    paintkit_weapon_quadball: PaintkitWeaponBase;
    paintkit_weapon_rescue_ranger: PaintkitWeaponBase;
    paintkit_weapon_reserve_shooter: PaintkitWeaponBase;
    paintkit_weapon_revolver: PaintkitWeaponBase;
    paintkit_weapon_rocketlauncher: PaintkitWeaponBase;
    paintkit_weapon_russian_riot: PaintkitWeaponBase;
    paintkit_weapon_scattergun: PaintkitWeaponBase;
    paintkit_weapon_scimitar: PaintkitWeaponBase;
    paintkit_weapon_scorch_shot: PaintkitWeaponBase;
    paintkit_weapon_shortstop: PaintkitWeaponBase;
    paintkit_weapon_shotgun: PaintkitWeaponBase;
    paintkit_weapon_smg: PaintkitWeaponBase;
    paintkit_weapon_sniperrifle: PaintkitWeaponBase;
    paintkit_weapon_soda_popper: PaintkitWeaponBase;
    paintkit_weapon_stickybomb_launcher: PaintkitWeaponBase;
    paintkit_weapon_tomislav: PaintkitWeaponBase;
    paintkit_weapon_trenchgun: PaintkitWeaponBase;
    paintkit_weapon_ubersaw: PaintkitWeaponBase;
    paintkit_weapon_winger_pistol: PaintkitWeaponBase;
    paintkit_weapon_wrench: PaintkitWeaponBase;
}

export interface DefaultItemInput {
    item_name?: string;
    no_item_def?: string;
    quality: string;
    counts: Record<string, string>;
}

export interface DefaultItem {
    default: {
        name: string;
        prefab: string;
        item_name: string;
        min_ilevel: string;
        max_ilevel: string;
        expiration_date: string;
        tool: {
            usage: {
                components: {
                    input: Record<string, DefaultItemInput>;
                }
            }
        },
        attributes: Record<string, PrefabAttribute>;
    }
}

export interface ItemAttribute {
    name: string;
    hidden?: string;
    attribute_class?: string;
    description_string?: string;
    description_format?: string;
    effect_type?: string;
    stored_as_integer?: string;
}

export interface ItemCriteriaTemplate {
    [key: string]: string;
}

export interface RandomItemAttributeTemplate {
    [template: string]: Record<string, string>;
}

export interface RandomItemAttribute {
    [key: string]: string;
}

export interface ItemLootlistJobTemplateDefinition {
    attribute_templates?: Record<string, string>;
    random_attributes?: Record<string, RandomItemAttribute>;
    additional_drop?: {
        loot_list: string;
    }
}

export interface ItemSet {
    name: string;
    items: Record<string, string>;
    attributes?: Record<string, PrefabAttribute>;
    store_bundle?: string;
    is_hidden_set?: string;
}

export interface ItemClientLootListJob {
    attribute_templates?: Record<string, string>;
    additional_drop?: Record<string, string>;
}

export type ClientLootListItem = GenericItemValue | ItemClientLootListJob;

export type ItemClientLootList = Record<string, ClientLootListItem>;

export interface ItemRecipeCondition {
    field: string;
    operator: string;
    value: string;
    required: string;
}

export interface RecipeInputItem {
    conditions: Record<string, ItemRecipeCondition>;
}

export interface RecipeOutputItem {
    quality?: string;
    conditions: Record<string, ItemRecipeCondition>;
}

export interface ItemRecipe {
    name: string;
    n_A: string;
    desc_inputs: string;
    desc_outputs: string;
    di_A: string;
    di_B: string;
    do_A: string;
    do_B: string;
    always_known: string;
    premium_only: string;
    disabled: string;
    input_items: RecipeInputItem;
    output_items: RecipeOutputItem;
    category: string;
}

export interface ItemAchievementRewardObject {
    SourceAppID?: string;
    DefIndex?: string;
    Items?: Record<string, string>;
}

export type ItemAchievementReward = string | ItemAchievementRewardObject;

export interface AttachedParticleAttribute {
    system: string;
}

export interface OtherAttachedParticleAttribute extends AttachedParticleAttribute {
    attachment?: string;
    draw_in_viewmodel?: string;
}

export interface CosmeticAttachedParticleAttribute extends AttachedParticleAttribute {
    attachment?: string;
    draw_in_viewmodel?: string;
    attach_to_rootbone?: string;
}

export interface WeaponAttachedParticleAttribute extends AttachedParticleAttribute {
    draw_in_viewmodel: string;
    use_suffix_name: string;
    attachment: string;
    control_point_1: string;
    control_point_2: string;
    control_point_3: string;
    control_point_4: string;
    control_point_5: string;
}

export interface TauntAttachedParticleAttribute {
    refire_time?: string;
}

export interface ItemAttributeControlledAttachedParticle {
    other_particles: Record<string, OtherAttachedParticleAttribute>;
    cosmetic_unusual_effects: Record<string, CosmeticAttachedParticleAttribute>;
    weapon_unusual_effects: Record<string, WeaponAttachedParticleAttribute>;
    killstreak_eyeglows: Record<string, AttachedParticleAttribute>;
    taunt_unusual_effects: Record<string, TauntAttachedParticleAttribute>;
}

export interface ItemArmoryData {
    armory_item_classes: Record<string, string>;
    armory_attributes: Record<string, string>;
    armory_items: Record<string, string>;
}

export interface ItemLevel {
    KillEaterRank: Record<string, string>;
    SpiritOfGivingRank: Record<string, string>;
    KillEater_HolidayPunchRank: Record<string, string>;
    KillEater_ManTreadsRank: Record<string, string>;
    KillEater_SapperRank: Record<string, string>;
    KillEater_RobotsKilledRank: Record<string, string>;
    KillEater_TimeCloakedRank: Record<string, string>;
    KillEater_HealthGivenRank: Record<string, string>;
    KillEater_PointsScored: Record<string, string>;
    Journal_DuckBadge: Record<string, string>;
    KillEater_OperationContractRank: Record<string, string>;
    KillEater_HalloweenSoulsRank: Record<string, string>;
    KillEater_ContractPointsEarnedRank: Record<string, string>;
    KillEater_BackstabsAbsorbed: Record<string, string>;
}

export interface ItemKillEaterScoreType {
    type_name: string;
    level_data?: string;
    allow_bot_victims?: string;
}

export interface MvMMission {
    display_name: string;
    mode: string;
    difficulty: string;
    tour_name?: string;
    badge_slot?: string;
    mannup_points?: string;
}

export interface MvMMap {
    display_name: string;
    missions: Record<string, MvMMission>;
}

export interface MvMTour {
    tour_name: string;
    badge_item_def: string;
    mission_complete_loot_list: string;
    tour_complete_loot_list: string;
    difficulty: string;
    loot_image: string;
    missions: Record<string, string>;
}

export interface MatchmakingCategory {
    localized_name: string;
    max_excludes: string;
    valid_match_groups: {
        MatchGroup_Casual_12v12?: string;
        MatchGroup_Ladder_6v6?: string;
    }
}

export interface ItemMapList {
    name: string;
    enabled: string;
}

export interface ItemMap {
    mm_type: string;
    localized_name: string;
    localized_desc: string;
    list_image: string;
    restrictions?: Record<string, string>;
    maplist: Record<string, ItemMapList>;
}

export interface MasterMapsList {
    name: string;
    localizedname: string;
    statsidentifier: string;
    strangeprefixtoken?: string;
    maptoken?: string;
    authors?: string;
    tags?: Record<string, string>;
    rolling_match_tags: Record<string, string>;
    rolling_match_target_tags: Record<string, GenericItemValue>;
}

export interface SteamPackages {
    localization_key: string;
}

export interface ItemStringLookup {
    [index: string]: string;
}

export interface CommunityMarketItemRemap {
    [child: string]: string;
}

export interface WarDefinitionSide {
    leaderboard_name: string;
    localized_name: string;
}

export interface WarDefinition {
    name: string;
    localized_name: string;
    start_time: string;
    end_time: string;
    sides: Record<string, WarDefinitionSide>;
}

export interface GameSchema {
    game_info: Record<string, string>;
    qualities: Record<string, ItemQuality>;
    colors: Record<string, ItemColor>;
    rarities: Record<string, ItemRarity>;
    equip_regions_list: Record<string, GenericItemValue>;
    equip_conflict: Record<string, ItemEquipConflict>;
    quest_objective_conditions: Record<string, ItemQuestObjectiveCondition>;
    item_series_types: ItemSeriesType;
    item_collections: Record<string, ItemCollection>;
    operations: Record<string, ItemOperation>;
    prefabs: ItemPrefab;
    items: DefaultItem;
    attributes: Record<string, ItemAttribute>;
    item_criteria_templates: Record<string, ItemCriteriaTemplate>;
    random_attribute_templates: Record<string, RandomItemAttributeTemplate>;
    lootlist_job_template_definitions: Record<string, ItemLootlistJobTemplateDefinition>;
    item_sets: Record<string, ItemSet>;
    client_loot_lists: Record<string, ItemClientLootList>;
    revolving_loot_lists: Record<string, string>;
    recipes: Record<string, ItemRecipe>;
    achievement_rewards: Record<string, ItemAchievementReward>;
    attribute_controlled_attached_particles: ItemAttributeControlledAttachedParticle;
    armory_data: ItemArmoryData,
    item_levels: ItemLevel;
    kill_eater_score_types: Record<string, ItemKillEaterScoreType>;
    mvm_maps: Record<string, MvMMap>;
    mvm_tours: Record<string, MvMTour>;
    matchmaking_categories: Record<string, MatchmakingCategory>;
    maps: Record<string, ItemMap>;
    master_maps_list: Record<string, MasterMapsList>;
    steam_packages: Record<string, SteamPackages>;
    string_lookups: Record<string, ItemStringLookup>;
    community_market_item_remaps: Record<string, CommunityMarketItemRemap>;
    war_definitions: Record<string, WarDefinition>;
}

/**
 * Represents the Team Fortress 2 client schema parsed into a JSON object.
 */
export interface ClientSchema {
    items_game: GameSchema;
}
