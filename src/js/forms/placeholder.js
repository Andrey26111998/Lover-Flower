export const getPlaceholders = (fields) => {
    const placeholders = {};
    for (const field of fields) {
        const fieldId = field.id;
        if (!fieldId) {
            continue;
        }
        placeholders[fieldId] = field.placeholder;
    }
    return placeholders;
}