type AnyType = string | number | boolean;

function formatValue(value: AnyType): AnyType {
    if (typeof value === 'string'){
        return value.toUpperCase();
    } else if (typeof value === 'number'){
        return value*10;
    } else if (typeof value === 'boolean'){
        return !value;
    }
    
    return value;
}

