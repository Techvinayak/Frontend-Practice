  $('#startBtn').on('click', function () {
            let $quote = $('#quote');
            let $container = $('#scrollContainer');
            let containerWidth = $container.width();
            let quoteWidth = $quote.outerWidth();
            let distance = containerWidth - quoteWidth;

            $quote.css({ left: 0 });

            let count = 0;
            function animateLTR() {
                $quote.animate({ left: distance }, 1000, function () {
                    $quote.animate({ left: 0 }, 1000, function () {
                        count++;
                        if (count < 4) {
                            animateLTR();
                        } else {
                            animateRTL();
                        }
                    });
                });
            }

            
            function animateRTL() {
                $quote.css({ left: distance }); 
                $quote.animate({ left: 0 }, 1000); 
            }

            animateLTR();
        });