def get_full_name(first, middle, last):
  if middle != "":
    print(first + " " + middle + " " + last )
  else:
    print(first + " " + last)

get_full_name("Lee", "", "Winston")