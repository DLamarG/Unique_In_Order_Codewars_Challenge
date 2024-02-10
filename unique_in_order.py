def unique_in_order(sequence):
    newList = []
    for item in sequence:
        if len(newList) < 1 or not item == newList[len(newList) - 1]:
            newList.append(item)
    return newList



print(unique_in_order("AAAABBBCCDAABBB"))
print(unique_in_order("ABBCcA"))
