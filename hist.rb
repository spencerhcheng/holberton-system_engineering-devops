def largestAreaInHistogram(hist)
  largest_area = -1

  hist.each_with_index do |height, i1|
    start, fin = nil, i1 + 1

    hist.each_with_index do |el, i2|
      if i2 <= i1
        start = i2 if el >= height && start.nil?
        start = nil if el < height
      end

      if i2 > i1
        break if height > el
        fin = i2 + 1
      end
    end

     area = height * (fin-start)
     p "area: #{area} || height: #{height} || start: #{start} || fin: #{fin}"
     largest_area = area if area > largest_area
  end

  largest_area
end

p largestAreaInHistogram([6, 2, 5, 4, 5, 1, 6])
